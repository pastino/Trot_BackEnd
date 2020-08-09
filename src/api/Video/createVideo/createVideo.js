import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    createVideo: async (_, args) => {
      const { videoId, title, singer, thumbnail, duration, division } = args;
      for (let i = 0; i < videoId.length; i++) {
        await prisma.createVideo({
          videoId: videoId[i],
          title: title[i],
          singer: singer[i],
          thumbnail: thumbnail[i],
          duration: duration[i],
          division,
        });
      }
      return true;
    },
  },
};
