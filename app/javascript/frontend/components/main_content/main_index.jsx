import React from 'react';
import MainIndexRight from './main_index_right';

class MainIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="business">
        <div className="boundary-1-10" />
        <MainIndexLeft />
        <MainIndexRight />
        <div className="boundary-1-10" />
      </div>
    )
  };
}

export default MainIndex;