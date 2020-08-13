import { prisma } from "../../../../generated/prisma-client";
import { INFO_FRAGMENT } from "../../../fragments";

export default {
  Query: {
    seeInfo: async (_, args) => {
      const info = await prisma
        .information({ id: "ckdnzbdsg002o0772fgp251nk" })
        .$fragment(INFO_FRAGMENT);

      return info;
    },
  },
};
