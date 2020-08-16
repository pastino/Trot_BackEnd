import { prisma } from "../../../../generated/prisma-client";
import { GENERATION_VIDEO_FRAGMENT } from "../../../fragments";

export default {
  Query: {
    seeGenerationVideo: async (_, args) => {
      return prisma.generationVideos({}).$fragment(GENERATION_VIDEO_FRAGMENT);
    },
  },
};
