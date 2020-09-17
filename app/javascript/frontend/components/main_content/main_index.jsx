import React from 'react';
import MainIndexLeftContainer from './main_index_left_container';
import MainIndexRight from './main_index_right';

class MainIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="business">
        <div className="boundary-1-10" />
        <MainIndexLeftContainer />
        <MainIndexRight />
        <div className="boundary-1-10" />
      </div>
    )
  };
}

export default MainIndex;