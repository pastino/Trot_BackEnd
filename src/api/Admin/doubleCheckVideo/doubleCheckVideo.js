import { prisma } from "../../../../generated/prisma-client";
import { INFO_FRAGMENT } from "../../../fragments";

export default {
  Query: {
    doubleCheckVideo: async (_, args) => {
      const { title } = args;
      const videos = await prisma.videos({ where: { title_in: title } });

      return videos;
    },
  },
};
