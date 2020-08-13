import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    updateVideo: async (_, args) => {
      const {
        id,
        videoId,
        title,
        singer,
        thumbnail,
        duration,
        division,
        program,
      } = args;

      await prisma.updateVideo({
        where: { id },
        data: {
          videoId,
          title,
          singer,
          thumbnail,
          duration,
          division,
          program,
        },
      });

      return true;
    },
  },
};
