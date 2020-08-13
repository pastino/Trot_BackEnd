import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    deleteVideo: async (_, args) => {
      await prisma.deleteManyVideos({});
      return true;
    },
  },
};
