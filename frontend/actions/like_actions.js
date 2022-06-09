import * as LikeApiUtil from '../util/like_api_util';


export const RECEIVE_ALL_LIKE = 'RECEIVE_ALL_LIKE';
export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

const receiveLikes = (likes) => ({
    type: RECEIVE_ALL_LIKE,
    likes
  });

const receiveLike = (like) =>({
    type: RECEIVE_LIKE,
    like
})

const removeLike = (likeId) => ({
    type: REMOVE_LIKE,
    likeId
})


  
export const fetchLikes = () => dispatch =>(
    LikeApiUtil.fetchLikes().then(
        likes=> dispatch(receiveLikes(likes))
    )
)

export const createLike = (like) => dispatch =>(
    LikeApiUtil.createLike(like).then(
        like => dispatch(receiveLike(like))
    )
)

export const updateLike = (likes) => dispatch =>(
    LikeApiUtil.updateLike(likes).then(
        likes => dispatch(receiveLike(likes))
    )
)

export const deleteLike = likeId => dispatch => (
    LikeApiUtil.deleteLike(likeId)
      .then(() => dispatch(removeLike(likeId)))
)


