import { prisma } from "../../../../generated/prisma-client";
import { PLAY_LIST_BOX_FRAGMENT } from "../../../fragments";
import moment from "moment";

export default {
  Query: {
    seeLatestVideo: async (_, args) => {
      const { division, items, pageNumber } = args;
      const today = new Date();

      const thirtyBefore = moment(today, "HHmmss")
        .subtract(30, "days")
        .toDate();

      let startDate = moment(thirtyBefore).format("YYYY-MM-DD");
      let endDate = moment(today).format("YYYY-MM-DD");
      startDate = moment(startDate);
      endDate = moment(endDate);
      const now = startDate,
        dates = [];

      while (now.isBefore(endDate) || now.isSame(endDate)) {
        dates.push(now.format("YYYY-MM-DD"));
        now.add(1, "days");
      }

      if (division === "all") {
        return prisma.videos({
          orderBy: "releaseDate_DESC",
          first: items,
          skip: pageNumber,
          where: {
            title_not_contains: "Inst.",
            title_not_contains: "(MR)",
            OR: [
              {
                releaseDate_contains: dates[0],
              },
              {
                releaseDate_contains: dates[1],
              },
              {
                releaseDate_contains: dates[2],
              },
              {
                releaseDate_contains: dates[3],
              },
              {
                releaseDate_contains: dates[4],
              },
              {
                releaseDate_contains: dates[5],
              },
              {
                releaseDate_contains: dates[6],
              },
              {
                releaseDate_contains: dates[7],
              },
              {
                releaseDate_contains: dates[8],
              },
              {
                releaseDate_contains: dates[9],
              },
              {
                releaseDate_contains: dates[10],
              },
              {
                releaseDate_contains: dates[11],
              },
              {
                releaseDate_contains: dates[12],
              },
              {
                releaseDate_contains: dates[13],
              },
              {
                releaseDate_contains: dates[14],
              },
              {
                releaseDate_contains: dates[15],
              },
              {
                releaseDate_contains: dates[16],
              },
              {
                releaseDate_contains: dates[17],
              },
              {
                releaseDate_contains: dates[18],
              },
              {
                releaseDate_contains: dates[19],
              },
              {
                releaseDate_contains: dates[20],
              },
              {
                releaseDate_contains: dates[21],
              },
              {
                releaseDate_contains: dates[22],
              },
              {
                releaseDate_contains: dates[23],
              },
              {
                releaseDate_contains: dates[24],
              },
              {
                releaseDate_contains: dates[25],
              },
              {
                releaseDate_contains: dates[26],
              },
              {
                releaseDate_contains: dates[27],
              },
              {
                releaseDate_contains: dates[28],
              },
              {
                releaseDate_contains: dates[29],
              },
              {
                releaseDate_contains: dates[30],
              },
              {
                releaseDate_contains: dates[31],
              },
            ],
          },
        });
      } else {
        return prisma.videos({
          orderBy: "releaseDate_DESC",
          first: 10,
          where: {
            title_not_contains: "Inst.",
            title_not_contains: "(MR)",
            OR: [
              {
                releaseDate_contains: dates[0],
              },
              {
                releaseDate_contains: dates[1],
              },
              {
                releaseDate_contains: dates[2],
              },
              {
                releaseDate_contains: dates[3],
              },
              {
                releaseDate_contains: dates[4],
              },
              {
                releaseDate_contains: dates[5],
              },
              {
                releaseDate_contains: dates[6],
              },
              {
                releaseDate_contains: dates[7],
              },
              {
                releaseDate_contains: dates[8],
              },
              {
                releaseDate_contains: dates[9],
              },
              {
                releaseDate_contains: dates[10],
              },
              {
                releaseDate_contains: dates[11],
              },
              {
                releaseDate_contains: dates[12],
              },
              {
                releaseDate_contains: dates[13],
              },
              {
                releaseDate_contains: dates[14],
              },
              {
                releaseDate_contains: dates[15],
              },
              {
                releaseDate_contains: dates[16],
              },
              {
                releaseDate_contains: dates[17],
              },
              {
                releaseDate_contains: dates[18],
              },
              {
                releaseDate_contains: dates[19],
              },
              {
                releaseDate_contains: dates[20],
              },
              {
                releaseDate_contains: dates[21],
              },
              {
                releaseDate_contains: dates[22],
              },
              {
                releaseDate_contains: dates[23],
              },
              {
                releaseDate_contains: dates[24],
              },
              {
                releaseDate_contains: dates[25],
              },
              {
                releaseDate_contains: dates[26],
              },
              {
                releaseDate_contains: dates[27],
              },
              {
                releaseDate_contains: dates[28],
              },
              {
                releaseDate_contains: dates[29],
              },
              {
                releaseDate_contains: dates[30],
              },
              {
                releaseDate_contains: dates[31],
              },
            ],
          },
        });
      }
    },
  },
};
