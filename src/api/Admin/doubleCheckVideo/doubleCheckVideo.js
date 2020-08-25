import { prisma } from "../../../../generated/prisma-client";
import { VIDEO_FRAGMENT } from "../../../fragments";

export default {
  Query: {
    doubleCheckVideo: async (_, args) => {
      const { title, singer, album } = args;
      const videos = await prisma
        .videos({
          where: { title_in: title, singer_in: singer, album_in: album },
        })
        .$fragment(VIDEO_FRAGMENT);

      return videos;
    },
  },
};
