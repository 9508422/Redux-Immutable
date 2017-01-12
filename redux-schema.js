{
  users: {
    isAuthed,
    isFetching,
    error,
    authedId,
    [uid]: {
      lastUpdated,
      info: {
        name,
        uid,
        avatar,
      },
    },
  },
  modal: {
    duck,
    isOpen,
  },
  ducks: {
    isFetching,
    error,
    [duckId]: {
      lastUpdated,
      info: {
        avatar,
        duckId,
        name,
        text,
        timestamp,
        uid,
      },
    },
  },
  usersDucks: {
    [uid]: {
      lastUpdated,
      duckIds: [duckId, ...],
    },
  },
  likeCount: {
    [duckId]: 0,
  },
  usersLikes: {
    [duckId]: true,
  },
  replies: {
    [duckId]: {
      replies: {
        [replyId]: {
          lastUpdated,
          name,
          comment,
          uid,
          timestamp,
          avatar,
        }
      }
    }
  },
  listeners: {
    [listenerId]: true,
  },
  feed: {
    isFetching,
    error,
    newDucksAvailable,
    duckIdsToAdd: [duckId, ...],
    duckIds: [duckId, ...],
  },
},