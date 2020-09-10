import React from 'react';

const TITLE = {
  "/": "Hot Restaurants",
  "/all": "All Restaurants"
}
class MainIndexTitle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentPathname } = this.props;
    return (
      <h3>{TITLE[currentPathname]}</h3>
    )
  }
}

export default MainIndexTitle;