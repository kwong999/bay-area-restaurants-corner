export const fetchUser = (id, args) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${id}`,
    data: args
  })
);