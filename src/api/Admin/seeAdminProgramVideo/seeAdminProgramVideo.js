import { prisma } from "../../../../generated/prisma-client";
import { VIDEO_FRAGMENT } from "../../../fragments";

export default {
  Query: {
    seeAdminProgramVideo: async (_, args) => {
      const { program } = args;
      const videos = await prisma
        .videos({
          where: { program_contains: program },
          orderBy:
            program === "사랑의 콜센타" || program === "뽕숭아 학당"
              ? "ranking_DESC"
              : null,
        })
        .$fragment(VIDEO_FRAGMENT);
      return videos;
    },
  },
};
