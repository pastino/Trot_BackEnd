import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    playListUpdate: async (_, args) => {
      const { id, playListName } = args;

      await prisma.updatePlayListBox({
        where: { playListName },
        data: { videos: { connect: { id } } },
      });
      return true;
    },
  },
};
