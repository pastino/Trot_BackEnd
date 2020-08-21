import { prisma } from "../../../../generated/prisma-client";
import { VIDEO_FRAGMENT } from "../../../fragments";

export default {
  Query: {
    seeTopSong: async (_, args) => {
      return prisma
        .videos({
          orderBy: "popularity_DESC",
          where: { program: null, division: null, title_not_contains: "(MR)" },
          first: 100,
          skip: 0,
        })
        .$fragment(VIDEO_FRAGMENT);
    },
  },
};
