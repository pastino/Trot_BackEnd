export const VIDEO_FRAGMENT = `
  fragment VideoParts on Video {
    id
    videoId
    title
    singer
    thumbnail
    duration
    publishedAt
    division
    program
    playListBoxes {
      id
      playListName
      imageUrl
      videos {
        id
      }
      published
    }
    createdAt
    updatedAt
  }
`;

export const GENERATION_VIDEO_FRAGMENT = `
  fragment GenerationVideoParts on GenerationVideo {
    id
    videoId
    title
    singer
    thumbnail
    duration
    division
    program
    ranking
    createdAt
    updatedAt
  }
`;

export const INFO_FRAGMENT = `
  fragment InformationParts on Information {
    id
  }
`;

export const PLAY_LIST_BOX_FRAGMENT = `
  fragment PlayListBoxParts on PlayListBox {
    id
    playListName
    imageUrl
    videos {
      id
      videoId
      title
      singer
      thumbnail
      duration
      division
      program
      createdAt
      updatedAt
    }
    published
  }
`;
