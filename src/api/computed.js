import { prisma } from "../../generated/prisma-client";
import moment from "moment";

export default {
  Video: {
    newVideo: async (parent, _) => {
      const { id, createdAt } = parent;
      const today = new Date();
      const thirtyBefore = moment(today, "HHmmss")
        .subtract(7, "days")
        .toDate();
      const minimunDate = new Date(thirtyBefore);

      const newVideo =
        new Date(createdAt).getTime() > new Date(minimunDate).getTime()
          ? true
          : false;
      return newVideo;
    },
  },
  Information: {
    totalAmount: (parent, _) => {
      return prisma
        .videosConnection()
        .aggregate()
        .count();
    },
  },
  ProgramBox: {
    newVideos: async (parent, _) => {
      const { id, programName } = parent;
      const today = new Date();
      const thirtyBefore = moment(today, "HHmmss")
        .subtract(7, "days")
        .toDate();
      const minimunDate = new Date(thirtyBefore);
      const videos = await prisma.videos({
        where: { createdAt_gt: minimunDate, program: `${programName}(v)` },
      });

      return videos.length > 0 ? true : false;
    },
  },
  PlayListBox: {
    videoLength: async (parent, _) => {
      const { id, playListName } = parent;
      const videoLength = await prisma
        .videosConnection({ where: { playListBoxes_some: { playListName } } })
        .aggregate()
        .count();
      return videoLength;
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
