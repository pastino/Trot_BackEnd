import { isAuthenticated } from "../../../middleware";
import { prisma } from "../../../../generated/prisma-client";
import { SEE_IMAGE } from "../../../fragments";

export default {
  Query: {
    seeImage: (_, agrs, { request }) => {
      isAuthenticated(request);
      const { user } = request;
      const { pageNumber, items } = agrs;
      return prisma
        .files({ first: items, skip: pageNumber, orderBy: "createdAt_DESC" })
        .$fragment(SEE_IMAGE);
    },
  },
};
