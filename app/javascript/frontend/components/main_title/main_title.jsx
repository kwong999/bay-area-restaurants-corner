import React from 'react';

class MainTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      applicationName: "Bay Area Restaurants Corner",
      shortDescription: "Find a place for your meal"
    }
  }

  render() {
    return (
      <>
        <h1>{this.state.applicationName}</h1>
        <h2>{this.state.shortDescription}</h2>
      </>
    )
  }
}

export default MainTitle;