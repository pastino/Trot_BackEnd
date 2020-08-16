import { prisma } from "../../../../generated/prisma-client";
import { VIDEO_FRAGMENT } from "../../../fragments";

export default {
  Query: {
    seeProgramVideo: async (_, args) => {
      const { program, items, pageNumber } = args;
      const videos = await prisma
        .videos({
          where: { program },
          first: items,
          skip: pageNumber,
        })
        .$fragment(VIDEO_FRAGMENT);
      return videos;
    },
  },
};
