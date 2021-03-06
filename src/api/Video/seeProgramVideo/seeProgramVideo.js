import { prisma } from "../../../../generated/prisma-client";
import { VIDEO_FRAGMENT } from "../../../fragments";

export default {
  Query: {
    seeProgramVideo: async (_, args) => {
      const { program, items, pageNumber } = args;

      const videos = await prisma
        .videos({
          where: { program },
          orderBy:
            program === "사랑의 콜센타(v)" || program === "뽕숭아 학당(v)"
              ? "ranking_DESC"
              : "publishedAt_DESC",
          first: items,
          skip: pageNumber,
        })
        .$fragment(VIDEO_FRAGMENT);
      return videos;
    },
  },
};
