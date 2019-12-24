import React from 'react';
import businessImg01 from '../../../../assets/images/random-burger-1280.jpg'
import businessImg02 from '../../../../assets/images/random-asparagus-1280.jpg'
import businessImg03 from '../../../../assets/images/random-maki-1280.jpg'

let timer;

class ImageSession extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgIndex: Math.floor((Math.random() * 3))
    }
  }

  componentWillUnmount() {
    clearInterval(timer);
  }

  renderRandomImg() {
    clearInterval(timer);
    const imgList = [ businessImg01, businessImg02, businessImg03 ];
    timer = setTimeout(() => this.setState({ imgIndex: (this.state.imgIndex + 1) % 3 }), 3000);
    return(
      <img src={imgList[this.state.imgIndex]} alt="businessImg" />
    )
  }
  render() {
    if (this.state.imgIndex === 'undefine') return null;
    return(
      <>
        <figure className='business-img'>
          {this.renderRandomImg()}
        </figure>
      </>
    )
  }
}

export default ImageSession;