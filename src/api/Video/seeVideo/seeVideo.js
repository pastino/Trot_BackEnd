import { prisma } from "../../../../generated/prisma-client";
import { VIDEO_FRAGMENT } from "../../../fragments";

export default {
  Query: {
    seeVideo: async (_, args) => {
      const { division, items, pageNumber } = args;
      const videos = await prisma
        .videos({
          where: { division: division },
          orderBy: "like_DESC",
          first: items,
          skip: pageNumber,
        })
        .$fragment(VIDEO_FRAGMENT);
      return videos;
    },
  },
};
