import { isAuthenticated } from "../../../middleware";
import { prisma } from "../../../../generated/prisma-client";
import { SEE_POST } from "../../../fragments";

export default {
  Query: {
    seePost: (_, agrs, { request }) => {
      isAuthenticated(request);
      const { user } = request;
      const { pageNumber, items } = agrs;
      return prisma
        .posts({ first: items, skip: pageNumber, orderBy: "createdAt_DESC" })
        .$fragment(SEE_POST);
    },
  },
};
