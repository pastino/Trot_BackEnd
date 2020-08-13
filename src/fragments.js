export const VIDEO_FRAGMENT = `
  fragment VideoParts on Video {
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
`;

export const INFO_FRAGMENT = `
  fragment InformationParts on Information {
    id
  }
`;
