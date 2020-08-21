import { prisma } from "../../../../generated/prisma-client";
import { VIDEO_FRAGMENT } from "../../../fragments";

export default {
  Query: {
    seeTotalVideos: async (_, args) => {
      const { items, pageNumber } = args;
      const videos = await prisma
        .videos({
          where: { division: null, program: null },
          first: 50,
          skip: pageNumber,
        })
        .$fragment(VIDEO_FRAGMENT);
      return videos;
    },
  },
};
