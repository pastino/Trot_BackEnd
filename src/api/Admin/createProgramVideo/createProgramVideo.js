import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    createProgramVideo: async (_, args) => {
      const {
        videoId,
        title,
        thumbnail,
        duration,
        division,
        program,
        publishedAt,
      } = args;

      for (let i = 0; i < videoId.length; i++) {
        setTimeout(async () => {
          await prisma.createVideo({
            videoId: videoId[i],
            title: title[i],
            singer: null,
            thumbnail: thumbnail[i],
            duration: duration[i],
            division:
              division[i] === null ||
              division[i] === undefined ||
              division[i] === "null"
                ? null
                : division[i],
            program,
            publishedAt: publishedAt[i],
          });
        }, 1000);
      }
      return true;
    },
  },
};
