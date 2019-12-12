export const createComment = comment => (
  $.ajax({
    method: 'POST',
    url: '/api/comments',
    data: { comment: comment }
  })
)

export const updateComment = (comment, id) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/comments/${id}`,
    data: { comment: comment }
  })
)

export const destroyComment = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/comments/${id}`
  })
)