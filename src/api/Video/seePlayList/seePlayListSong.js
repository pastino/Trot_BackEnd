import { prisma } from "../../../../generated/prisma-client";
import { PLAY_LIST_BOX_FRAGMENT } from "../../../fragments";

export default {
  Query: {
    seePlayListSong: async (_, args) => {
      const { id } = args;
      console.log(id);
      const playListBox = await prisma
        .playListBox({ id })
        .$fragment(PLAY_LIST_BOX_FRAGMENT);
      return playListBox;
    },
  },
};
