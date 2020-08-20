import { prisma } from "../../generated/prisma-client";
import moment from "moment";

export default {
  Information: {
    totalAmount: (parent, _) => {
      return prisma
        .videosConnection()
        .aggregate()
        .count();
    },
  },
  // Video: {
  //   popularity: async (parent, _) => {
  //     const { id } = parent;
  //     const video = await prisma.video({ id });
  //     const releaseDate = video.releaseDate;
  //     const momentRelDate = moment([
  //       parseInt(releaseDate.split(".")[0]),
  //       parseInt(releaseDate.split(".")[1]),
  //       parseInt(releaseDate.split(".")[2]),
  //     ]);
  //     const todayD = new Date();
  //     const year = todayD.getFullYear();
  //     const month = todayD.getMonth();
  //     const date = todayD.getDate();
  //     const today = moment([year, month, date]);
  //     const dayDiff = today.diff(momentRelDate, "days");

  //     const like = video.like;
  //     const popularity = Math.floor(parseInt(like) / parseInt(dayDiff));
  //     return popularity;
  //   },
  // },
};
