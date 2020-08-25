import { prisma } from "../../../../../generated/prisma-client";

export default {
  Query: {
    seeProgram: async (_, args) => {
      const { division } = args;
      if (division === "prod") {
        return prisma.programBoxes({ where: { published: true } });
      } else {
        return prisma.programBoxes();
      }
    },
  },
};
