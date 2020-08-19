import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    addMainVideo: async (_, args) => {
      const { videoId, title, thumbnail, duration, publishedAt } = args;
      return prisma.createVideo({
        videoId: videoId,
        title: title,
        singer: null,
        thumbnail: thumbnail,
        duration: duration,
        division: "mainView",
        publishedAt: publishedAt,
      });
    },
  },
};
