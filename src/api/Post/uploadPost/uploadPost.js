import { isAuthenticated } from "../../../middleware";
import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    uploadPost: async (_, args, { request }) => {
      isAuthenticated(request);
      const {
        caption,
        title,
        assortment,
        files,
        postPrivate,
        postRatio,
      } = args;
      const { user } = request;
      const post = await prisma.createPost({
        caption,
        title,
        assortment,
        postPrivate,
        user: { connect: { id: user.id } },
      });
      for (let i = 0; i < files.length; i++) {
        await prisma.createFile({
          postRatio: postRatio[i],
          url: files[i],
          post: { connect: { id: post.id } },
        });
      }
      return post;
    },
  },
};
