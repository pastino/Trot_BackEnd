import { prisma } from "../../../../generated/prisma-client";
import { VIDEO_FRAGMENT, GENERATION_VIDEO_FRAGMENT } from "../../../fragments";

export default {
  Query: {
    seeDivVideos: async (_, args) => {
      const { division, singer, program, generation, items, pageNumber } = args;
      try {
        if (division !== null) {
          return prisma
            .videos({
              where: { division },
              first: items,
              skip: pageNumber,
            })
            .$fragment(GENERATION_VIDEO_FRAGMENT);
        } else if (program !== null) {
          return prisma
            .videos({
              where: { program },
              first: items,
              skip: pageNumber,
              orderBy: "publishedAt_DESC",
            })
            .$fragment(GENERATION_VIDEO_FRAGMENT);
        } else if (singer !== null) {
          return prisma
            .videos({
              where: { singer_contains: singer },
              first: items,
              skip: pageNumber,
            })
            .$fragment(GENERATION_VIDEO_FRAGMENT);
        } else if (generation !== null) {
          return prisma
            .generationVideos({
              where: { division: generation },
              orderBy: "ranking_ASC",
              first: items,
              skip: pageNumber,
            })
            .$fragment(GENERATION_VIDEO_FRAGMENT);
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
};
