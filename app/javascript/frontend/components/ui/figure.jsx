import React from 'react';

class Figure extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { className, img, alt } = this.props;
    return (
      <figure className={className} >
        <img src={img} alt={alt} />
      </figure>
    )
  }
}

export default Figure;