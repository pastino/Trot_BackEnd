import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    createOneVideo: async (_, args) => {
      const {
        title,
        singer,
        album,
        songId,
        releaseDate,
        like,
        videoId,
        publishedAt,
        thumbnail,
        duration,
        program,
        division,
      } = args;

      await prisma.createVideo({
        title,
        singer,
        videoId,
        thumbnail,
        duration,
        publishedAt,
        album,
        songId,
        releaseDate,
        like,
        //   division,
        //   program,
      });

      return true;
    },
  },
};
