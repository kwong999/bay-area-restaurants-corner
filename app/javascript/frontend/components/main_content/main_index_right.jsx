import React from 'react';
import ImageSession from '../image/image';

class MainIndexRight extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // render food images looping frame
    return (
      <div className='business-right'>
        <ImageSession />
      </div>
    )
  }
}

export default MainIndexRight;