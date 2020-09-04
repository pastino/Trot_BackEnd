import { prisma } from "../../../../../generated/prisma-client";
export default {
  Query: {
    seeChat: async (_, args) => {
      return prisma.chats({ orderBy: "createdAt_DESC", first: 200 });
    },
  },
};
