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
        popularity,
        singerAccuFactor,
        program,
        division,
      } = args;

      const video = await prisma.createVideo({
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
        popularity,
        singerAccuFactor,
        division,
        //   program,
      });

      return true;
    },
  },
};
