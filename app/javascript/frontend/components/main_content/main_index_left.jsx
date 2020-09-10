import React from 'react';
import Loader from '../ui/loader';

class MainIndexLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPath = this.props.location.pathname
    }
  }

  render() {
    const loading = this.props.ui.loading.loadingBusiness;
    if (loading) {
      return (
        <div className='business-left'>
          <Loader />
        </div>
      )
    }
    return (
      <div className='business-left'>

      </div>
    )
  }
}

export default MainIndexLeft;