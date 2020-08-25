import { prisma } from "../../../../../generated/prisma-client";

export default {
  Query: {
    seeSinger: async (_, args) => {
      const { division } = args;
      if (division === "prod") {
        return prisma.singerBoxes({ where: { published: true } });
      } else {
        return prisma.singerBoxes();
      }
    },
  },
};
