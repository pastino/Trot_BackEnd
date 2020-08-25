import { prisma } from "../../../../generated/prisma-client";
import { VIDEO_FRAGMENT } from "../../../fragments";

export default {
  Query: {
    favoriteVideo: async (_, args) => {
      const { videoId } = args;
      console.log(videoId);
      const videos = await prisma
        .videos({
          where: { id_in: videoId },
        })
        .$fragment(VIDEO_FRAGMENT);

      return videos;
    },
  },
};
