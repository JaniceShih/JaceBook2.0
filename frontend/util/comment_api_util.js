
// fetach All Comment
export const  fetchComments = () => (
    $.ajax({
      url: '/api/comments'
    })
)


export const createComment = comment => {
  return $.ajax({
    url: '/api/comments',
    method: 'POST',
    data: {comment}
  })
};


export const updateComment = (comment) =>{
  return $.ajax({
    url: `/api/comments/${comment.id}`,
    method: 'PATCH',
    data: {comment}
  })
}


export const deleteComment = (commentId) =>{

  return $.ajax({
    url: `/api/comments/${commentId}`,
    method: 'DELETE'
  })
}
