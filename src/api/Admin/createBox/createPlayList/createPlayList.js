import { prisma } from "../../../../../generated/prisma-client";

export default {
  Mutation: {
    createPlayList: async (_, args) => {
      const { playListName, imageUrl } = args;
      await prisma.createPlayListBox({
        playListName,
        imageUrl,
      });
      return true;
    },
  },
};
