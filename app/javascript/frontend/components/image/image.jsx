import React from 'react';
import businessImg01 from '../../../../assets/images/random-asparagus-500.jpg'
import businessImg02 from '../../../../assets/images/random-burger-500.jpg'
import businessImg03 from '../../../../assets/images/random-cake-500.jpg'
import businessImg04 from '../../../../assets/images/random-maki-500.jpg'
import businessImg05 from '../../../../assets/images/random-mango-catfish-taco-500.jpg'
import businessImg06 from '../../../../assets/images/random-pizza-500.jpg'

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
    const imgList = [businessImg01, businessImg02, businessImg03, businessImg04, businessImg05, businessImg06 ];
    timer = setTimeout(() => this.setState({ imgIndex: (this.state.imgIndex + 1) % 6 }), 3000);
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