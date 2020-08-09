import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    deleteDupli: async (_, args) => {
      const topVideo = await prisma.videos({ where: { division: "top" } });

      const differentsVideo = await prisma.videos({
        where: { division: null },
      });
      console.log(1);
      for (let i = 0; i < differentsVideo.length; i++) {
        if (
          topVideo
            .map((video) => video.videoId)
            .includes(differentsVideo[i].videoId)
        ) {
          await prisma.deleteVideo({ id: differentsVideo[i].id });
        }
      }

      return true;
    },
  },
};
