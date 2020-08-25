import { prisma } from "../../../../../generated/prisma-client";

export default {
  Mutation: {
    createSinger: async (_, args) => {
      const { singerName, imageUrl } = args;
      await prisma.createSingerBox({
        singerName,
        imageUrl,
      });
      return true;
    },
  },
};
