import { prisma } from "../../../../../generated/prisma-client";

export default {
  Mutation: {
    connectVisitor: async (_, args) => {
      const chatRoom = await prisma.chatRoom({
        id: "ckemakfkq00bl0765ey1ro9hs",
      });
      const previousNum = chatRoom.numOfVisitor;
      await prisma.updateChatRoom({
        where: { id: "ckemakfkq00bl0765ey1ro9hs" },
        data: { numOfVisitor: previousNum + 1 },
      });
      return true;
    },
  },
};
