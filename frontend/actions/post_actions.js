import * as PostApiUtil from '../util/post_api_util';


export const RECEIVE_ALL_POST = 'RECEIVE_ALL_POST';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';

const receivePosts = (posts) => ({
    type: RECEIVE_ALL_POST,
    posts
  });

const receivePost = (post) =>({
    type: RECEIVE_POST,
    post
})

const removePost = postId => ({
    type: REMOVE_POST,
    postId
  });


  
export const fetchPosts = () => dispatch =>(
    PostApiUtil.fetchPosts().then(
        posts=> dispatch(receivePosts(posts))
    )
)

export const createPost = (post) => dispatch =>(
    PostApiUtil.createPost(post).then(
        post => dispatch(receivePost(post))
    )
)

export const updatePost = (post) => dispatch =>(
    PostApiUtil.updatePost(post).then(
        post => dispatch(receivePost(post))
    )
)

export const deletePost = postId => dispatch => (
    PostApiUtil.deletePost(postId)
      .then(() => dispatch(removePost(postId)))
)


