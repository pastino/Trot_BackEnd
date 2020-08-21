import { prisma } from "../../../../generated/prisma-client";
import { VIDEO_FRAGMENT } from "../../../fragments";

export default {
  Query: {
    artistVideo: async (_, args) => {
      const { artist, pageNumber, items } = args;
      const videos = await prisma
        .videos({
          where: { singer_contains: artist },
          orderBy: "singerAccuFactor_DESC",
          first: items,
          skip: pageNumber,
        })
        .$fragment(VIDEO_FRAGMENT);

      return videos;
    },
  },
};
