import { prisma } from "../../../../../generated/prisma-client";
import { VIDEO_FRAGMENT } from "../../../../fragments";

export default {
  Query: {
    mainViewVideo: async (_, args) => {
      return prisma
        .videos({ where: { division: "mainView" } })
        .$fragment(VIDEO_FRAGMENT);
    },
  },
};
