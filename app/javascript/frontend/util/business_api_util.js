export const fetchBusinesses = data => (
  $.ajax({
    method: 'GET',
    url: 'api/businesses',
    data
  })
);

export const fetchBusiness = id => (
  $.ajax({
    method: 'GET',
    url: `api/businesses/${id}`
  })
);

export const createBusiness = business => (
  $.ajax({
    method: 'POST',
    url: 'api/businesses',
    data: { business }
  })
);