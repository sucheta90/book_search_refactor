const { Schema } = require("mongoose");
const { User, Book } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("savedBooks");
      }
      throw AuthenticationError;
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      // First we create the user
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      // Return an `Auth` object that consists of the signed token and user's information
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    saveBook: async (parent, { BookData }, context) => {
      if (context.user) {
        const userSavedBook = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { savedBooks: BookData } },
          { new: true }
        );

        //   const book = await new Schema({
        //   description,
        //   bookId,
        //   image,
        //   link,
        //   title,
        //   authors,
        // });

        // await User.findOneAndUpdate(
        //   { _id: context.user._id },
        //   { $addToSet: { savedBooks: book._id } },
        //   { new: true }
        // );

        return userSavedBook;
      }
      throw AuthenticationError;
      ("You need to be logged in!");
    },
    removeBook: async (parent, { thoughtId }, context) => {
      if (context.user) {
        const book = await Book.findOneAndDelete({
          _id: thoughtId,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBooks: book._id } },
          { new: true }
        );

        return User;
      }
      throw AuthenticationError;
    },
    removeBook: async (parent, { userId, bookId }) => {
      return User.findOneAndUpdate(
        { _id: userId },
        {
          $pull: { savedBooks: { _id: bookId } },
        },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
