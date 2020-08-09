import { prisma } from "../../../../generated/prisma-client";
import { VIDEO_FRAGMENT } from "../../../fragments";

export default {
  Query: {
    favoriteVideo: async (_, args) => {
      const { videoId } = args;
      const videos = await prisma
        .videos({
          where: { videoId_in: videoId },
        })
        .$fragment(VIDEO_FRAGMENT);
      console.log(videos);
      return videos;
    },
  },
};
