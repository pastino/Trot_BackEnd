import { prisma } from "../../../../generated/prisma-client";
import { VIDEO_FRAGMENT, PLAY_LIST_BOX_FRAGMENT } from "../../../fragments";

export default {
  Query: {
    seeTotalVideos: async (_, args) => {
      const { items, pageNumber } = args;

      const videos = await prisma
        .videos({
          where: {
            division: null,
            program: null,
          },
          first: 100,
          skip: 1,
        })
        .$fragment(VIDEO_FRAGMENT);
      return videos;
    },
  },
};
