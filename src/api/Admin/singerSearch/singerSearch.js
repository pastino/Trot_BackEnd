import { prisma } from "../../../../generated/prisma-client";
import { VIDEO_FRAGMENT } from "../../../fragments";

export default {
  Query: {
    singerSearch: async (_, args) => {
      const { singer } = args;
      return prisma
        .videos({ where: { singer_contains: singer } })
        .$fragment(VIDEO_FRAGMENT);
    },
  },
};
