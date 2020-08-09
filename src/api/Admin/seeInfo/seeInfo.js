import { prisma } from "../../../../generated/prisma-client";
import { INFO_FRAGMENT } from "../../../fragments";

export default {
  Query: {
    seeInfo: async (_, args) => {
      const info = await prisma
        .information({ id: "ckdmh940t44k40a50avdsyu4e" })
        .$fragment(INFO_FRAGMENT);
      return info;
    },
  },
};
