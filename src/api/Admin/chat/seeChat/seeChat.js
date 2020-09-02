import { prisma } from "../../../../../generated/prisma-client";
export default {
  Query: {
    seeChat: async (_, args) => {
      return prisma.chats({});
    },
  },
};
