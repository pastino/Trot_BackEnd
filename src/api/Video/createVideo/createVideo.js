import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    createVideo: async (_, args) => {
      const {
        videoId,
        title,
        singer,
        thumbnail,
        duration,
        division,
        program,
      } = args;
      console.log(program);
      for (let i = 0; i < videoId.length; i++) {
        await prisma.createVideo({
          videoId: videoId[i],
          title: title[i],
          singer: singer[i],
          thumbnail: thumbnail[i],
          duration: duration[i],
          division:
            division[i] === null ||
            division[i] === undefined ||
            division[i] === "null"
              ? null
              : division[i],
          program:
            program[i] === null ||
            program[i] === undefined ||
            program[i] === "null"
              ? null
              : program[i],
        });
      }
      return true;
    },
  },
};
