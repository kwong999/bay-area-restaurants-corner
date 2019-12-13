export const createRate = rate => (
  $.ajax({
    method: 'POST',
    url: '/api/rates',
    data: { rate: rate }
  })
)

export const updateRate = (rate, id) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/rates/${id}`,
    data: { rate: rate }
  })
)

export const destroyRate = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/rates/${id}`
  })
)