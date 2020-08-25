import { prisma } from "../../../../../generated/prisma-client";

export default {
  Query: {
    seePlayList: async (_, args) => {
      const { division } = args;
      if (division === "prod") {
        return prisma.playListBoxes({ where: { published: true } });
      } else {
        return prisma.playListBoxes();
      }
    },
  },
};
