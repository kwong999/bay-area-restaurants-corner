import React from 'react';

class BusinessOperatingHours extends React.Component {
  renderListItem() {
    const { hour } = this.props;
    const days = [
      "hours_mon",
      "hours_tue",
      "hours_wed",
      "hours_thu",
      "hours_fri",
      "hours_sat",
      "hours_sun"
    ];
    return days.map((day, idx) => (
      <li key={idx}>
        <p>{day.charAt(6).toUpperCase() + day.slice(7)}: </p>
        <p>{(hour[day]) ? hour[day] : '-'}</p>
      </li>
    ))
  }
  render() {
    return (
      <ul className='business-operating-hours'>
        {this.renderListItem()}
      </ul>
    )
  };
}

export default BusinessOperatingHours;