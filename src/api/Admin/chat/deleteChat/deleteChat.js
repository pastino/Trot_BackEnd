import { prisma } from "../../../../../generated/prisma-client";

export default {
  Mutation: {
    deleteChat: async (_, args) => {
      const { chatId, fcmToken } = args;
      if (fcmToken !== null) {
        await prisma.updateChat({
          where: { id: chatId },
          data: { delete: true },
        });
        return true;
      } else {
        return false;
      }
    },
  },
};
