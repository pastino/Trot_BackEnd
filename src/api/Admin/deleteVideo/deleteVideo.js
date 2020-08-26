import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    deleteVideo: async (_, args) => {
      const { id } = args;
      console.log(id);
      await prisma.deleteVideo({ id });
      return true;
    },
  },
};
