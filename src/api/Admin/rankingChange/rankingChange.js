import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    rankingChange: async (_, args) => {
      const { id, index } = args;
      for (let i = 0; i < id.length; i++) {
        await prisma.updateGenerationVideo({
          where: { id: id[i] },
          data: { ranking: index[i] },
        });
      }
      return true;
    },
  },
};
