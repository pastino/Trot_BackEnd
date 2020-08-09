import { prisma } from "../../generated/prisma-client";

export default {
  Information: {
    totalAmount: (parent, _, { request }) => {
      return prisma
        .videosConnection()
        .aggregate()
        .count();
    },
  },
};
