export const createVote = vote => (
  $.ajax({
    method: 'POST',
    url: '/api/votes',
    data: { vote: vote }
  })
)

export const updateVote = (vote, id) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/votes/${id}`,
    data: { vote: vote }
  })
)

export const destroyVote = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/votes/${id}`
  })
)