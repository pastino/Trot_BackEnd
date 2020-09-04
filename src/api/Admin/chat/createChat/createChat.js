import { prisma } from "../../../../../generated/prisma-client";

export default {
  Mutation: {
    createChat: async (_, args) => {
      const {
        fcmToken,
        nickName,
        avatar,
        text,
        commentTargetId,
        commentText,
        commentNickName,
        videoId,
        thumbnail,
        title,
        singer,
        duration,
      } = args;
      return prisma.createChat({
        fcmToken,
        nickName,
        avatar,
        text,
        commentTargetId,
        commentText,
        commentNickName,
        videoId,
        thumbnail,
        title,
        singer,
        duration,
      });
    },
  },
};
