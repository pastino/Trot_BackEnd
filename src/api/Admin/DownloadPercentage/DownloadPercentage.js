import { prisma } from "../../../../generated/prisma-client";
import { VIDEO_FRAGMENT } from "../../../fragments";

export default {
  Subscription: {
    downloadPercentage: {
      subscribe: () => {
        const test = prisma.$subscribe
          .video()
          .node()
          .$fragment(VIDEO_FRAGMENT);
        console.log(test);
        return test;
      },
      resolve: (payload) => payload,
    },
  },
};
