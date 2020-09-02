import { prisma } from "../../../../../generated/prisma-client";

export default {
  Mutation: {
    createChat: async (_, args) => {
      const { nickName, avatar, text } = args;
      return prisma.createChat({
        nickName,
        avatar,
        text,
      });
    },
  },
};
