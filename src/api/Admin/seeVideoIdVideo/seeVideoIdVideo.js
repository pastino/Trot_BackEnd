import { prisma } from "../../../../generated/prisma-client";
import { VIDEO_FRAGMENT } from "../../../fragments";

export default {
  Query: {
    seeVideoIdVideo: async (_, args) => {
      const { id } = args;

      const videos = await prisma
        .videos({
          where: { videoId_in: id },
        })
        .$fragment(VIDEO_FRAGMENT);
      return videos;
    },
  },
};
