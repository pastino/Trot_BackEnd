import { prisma } from "../../../../../generated/prisma-client";

export default {
  Mutation: {
    createProgram: async (_, args) => {
      const { programName, imageUrl } = args;
      await prisma.createProgramBox({
        programName,
        imageUrl,
      });
      return true;
    },
  },
};
