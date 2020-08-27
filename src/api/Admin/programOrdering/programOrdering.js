import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    programOrdering: async (_, args) => {
      const programVideo = await prisma.videos({
        where: {
          program_contains: "뽕숭아 학당",
          title_contains: "생활기록부 - 이찬원",
        },
      });
      for (let i = 0; i < programVideo.length; i++) {
        console.log(i);
        await prisma.updateVideo({
          where: { id: programVideo[i].id },
          data: { ranking: 0 },
        });
      }
      return true;
    },
  },
};
