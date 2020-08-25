import { prisma } from "../../../../generated/prisma-client";
import { VIDEO_FRAGMENT } from "../../../fragments";

export default {
  Query: {
    searchPlayListVideo: async (_, args) => {
      const { title, singer } = args;
      console.log(title, singer);
      return await prisma
        .videos({ where: { title, singer } })
        .$fragment(VIDEO_FRAGMENT);
    },
  },
};
