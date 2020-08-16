import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    programVideoDelete: async (_, args) => {
      const { program } = args;
      try {
        await prisma.deleteManyVideos({ program });
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
