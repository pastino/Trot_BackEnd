import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    updateLike: async (_, args) => {
      const { songId, releaseDate, popularity, singerAccuFactor } = args;
      console.log(songId.length);
      for (let i = 0; i < songId.length; i++) {
        console.log(i);
        const findVideo = await prisma.$exists.video({ songId: songId[i] });
        if (findVideo) {
          await prisma.updateManyVideos({
            where: { songId: songId[i] },
            data: {
              releaseDate: releaseDate[i],
              popularity: popularity[i],
              singerAccuFactor: singerAccuFactor[i],
            },
          });
        } else {
          console.log("없음");
        }
      }
      console.log("끝");
      return true;
    },
  },
};
