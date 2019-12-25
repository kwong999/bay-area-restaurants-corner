import React from 'react';
import ReactDOM from 'react-dom';

class Map extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.pos.lat === nextProps.pos.lat && this.props.pos.lng === nextProps.pos.lng) {
      return false;
    } else {
      return true;
    }
  }
  
  componentDidMount() {
    if (this.props.pos) {
      // const { pos } = this.props;
      // const mapOptions = {
      //   center: pos,
      //   zoom: 18
      // };
      // const map = ReactDOM.findDOMNode(this.refs.map);
      // this.map = new google.maps.Map(map, mapOptions);
      // const marker = new google.maps.Marker({
      //   position: pos,
      //   map: this.map
      // });
    }
  }
  
  render() {
    return (
      <div id='map-container'>
        <div ref='map' id='map'></div>
      </div>
    )
  }
}

export default Map;