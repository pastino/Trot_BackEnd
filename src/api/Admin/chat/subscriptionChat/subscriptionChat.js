import { prisma } from "../../../../../generated/prisma-client";

export default {
  Subscription: {
    subscriptionChat: {
      subscribe: () => {
        const chat = prisma.$subscribe.chat().node();
        console.log(chat);
        return chat;
      },
      resolve: (payload) => payload,
    },
  },
};
