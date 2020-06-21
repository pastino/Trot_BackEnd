export const USER_FRAGMENT = `
        id
        userId
        avatar
        nickname
        dateOfBirth
        gender
        snsLogin
        bio   
`;

export const POST_FRAGMENT = `
        id
        title
        caption
        postPrivate
        user {
          ${USER_FRAGMENT}
        }
        files {
          id
          url
          postRatio
        }
        likes {
          id
          user {
            ${USER_FRAGMENT}
          }
        }
        isLiked
        likeCount
        assortment
        comments {
          id
          text
          user {
            id
            nickname
            avatar
          }
          createdAt
          updatedAt
          repply {
            id
            text
            user {
              id
              nickname
              avatar
            }
            createdAt
            updatedAt
          }
        }
        commentCounts
        repplyCounts
        createdAt
        updatedAt
`;

export const SEE_POST = `
  fragment PostParts on Post {
    ${POST_FRAGMENT}
  }
`;

export const SEE_IMAGE = `
  fragment FileParts on File {
    id
    url
    postRatio
    post {
      id
    }
    createdAt
    updatedAt
  }
`;

export const COMMENT_FRAGMENT = `
  fragment CommentParts on Comment {
      id
      text
      user {
        id
        nickname
        avatar
      }
      post {
        id
      }
      repply {
        id
        text
        user {
          id
          avatar
          nickname
        }
        comment {
          id
        }
        createdAt
        updatedAt
        }
      createdAt
      updatedAt
  }
`;

export const REPPLY_FRAGMENT = `
  fragment RepplyParts on Repply {
      id
      text
      user {
        id
        avatar
        nickname
      }
      comment {
        id
      }
      createdAt
      updatedAt
  }
`;

export const LIKE_FRAGMENT = `
  fragment LikeParts on Like {
    id
    user {
      id 
      nickname
      avatar
    }
    post { 
      id
    }
    createdAt
    updatedAt
  }
`;

export const TALK_FRAGMENT = `
  fragment TalkParts on Talk {
    id
    user {
      ${USER_FRAGMENT}
    }
    talkText
    talkCommentCounts
    talkRepplyCounts
    talkComments {
      id
      user {
        id
        avatar
        nickname
      }
      talk {
        id
      }
      text
      talkRepplies {
        id
        user {
          id
          avatar
          nickname
        }
        talkComment {
          id
        }
        text
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
    talkRepplies {
      id
      user {
        id
        nickname
        avatar
      }
      talkComment {
        id
      }
      talk {
        id
      }
      text
      createdAt
      updatedAt
    }
    division
    createdAt
    updatedAt
  }
`;

export const TALK_COMMENT_FRAGMENT = `
  fragment TalkComments on TalkComment {
      id
      user {
        id
        avatar
        nickname
      }
      talk {
        id
      }
      text
      talkRepplies {
        id
        talkComment {
          id
        }
        text
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
  }
`;

export const TALK_REPPLY_FRAGMENT = `
  fragment RepplyParts on TalkRepply {
      id
      user {
        id
        nickname
        avatar
      }
      talkComment {
        id
      }
      talk {
        id
      }
      text
      createdAt
      updatedAt
  }
`;

export const SEE_USER_FRAGMENT = `
    fragment UserParts on User {
        id
        avatar
        dateOfBirth
        userId
        nickname
        gender
        snsLogin
        postCounts
        bio
        talks {
          id
          user {
            ${USER_FRAGMENT}
          }
          talkText
          division
          createdAt
          updatedAt
        }
        following {
          id
          avatar
          dateOfBirth
          nickname
          gender
          postCounts

        }
        followers {
          id
          avatar
          dateOfBirth
          nickname
          gender
          postCounts
   
        }
        posts {
          id
          title
          caption
          assortment
          postPrivate
          user {
            id
            avatar
            nickname
          }
          files {
            id
            url
            postRatio
          }
        
          likes {
            id
          }
          comments {
            id
          }
          createdAt
          updatedAt
        }
        likes {
          id
        }
        comments {
          id
          text
          user {
            id
          }
          post {
            id
          }
        }
        rooms {
          id
          participants {
            id
          }
          messages {
            id
          }
        }
        createdAt
        updatedAt
    }
`;

export const ROOM_FRAGMENT = `
    fragment RoomParts on Room {
        id
        participants {
            id
            userId
            nickname
            dateOfBirth
            gender
            bio     
            posts {
                id
                title
                caption
            }
            likes {
                id
            }
            comments {
                id
                text
            }
        }
        messages {
            id
            text
            from {
                ${USER_FRAGMENT}
            }
            to {
                ${USER_FRAGMENT}
            }
        }
    }
`;

export const SUGGESTION_FRAGMENT = `
fragment SuggestionParts on Suggestion {
    id
    user {
      id
      userId
      nickname
      avatar
      gender
      dateOfBirth
    }
    text
    image
    createdAt
    updatedAt
  }
`;
