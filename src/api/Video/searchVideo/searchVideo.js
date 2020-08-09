import { prisma } from "../../../../generated/prisma-client";
import { VIDEO_FRAGMENT } from "../../../fragments";

export default {
  Query: {
    searchVideo: async (_, args) => {
      const { value, items, pageNumber } = args;
      const videos = await prisma
        .videos({
          where: {
            OR: [{ title_contains: value }, { singer_contains: value }],
          },
          first: items,
          skip: pageNumber,
        })
        .$fragment(VIDEO_FRAGMENT);

      return videos;
    },
  },
};
