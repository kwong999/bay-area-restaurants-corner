import React from 'react';
import { Link } from 'react-router-dom';

function RenderRates({ rates }) {
  return rates.map(rate => (
    <li key={`rate-${rate.id}`}>
      <ul className='recent-rate'>
        <li>Restaurant Name: <Link to={`/business/${rate.business_id}`}>{rate.business_name}</Link></li>
        <li>Rating: {rate.rating}</li>
      </ul>
    </li>
  ));
}

export default RenderRates;