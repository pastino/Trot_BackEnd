import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    registerMainView: async (_, args) => {
      const { id } = args;
      const currentMain = await prisma.videos({
        where: { mainRegister: true },
      });
      await prisma.updateVideo({
        where: { id: currentMain.id },
        mainRegister: false,
      });
      await prisma.updateVideo({
        where: { id },
        mainRegister: true,
      });
      return true;
    },
  },
};
