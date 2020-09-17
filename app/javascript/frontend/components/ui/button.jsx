import React from 'react';
import { Link } from 'react-router-dom';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { link, onClick, text, title } = this.props;
    return (
      <button className='button' onClick={onClick} title={title}>
        <Link to={link}>
          {text}
        </Link>
      </button>
    )
  }
}

export default Button;