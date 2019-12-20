import React from 'react';
import ReactDOM from 'react-dom';

class Map extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.pos.lat === nextProps.pos.lat && this.props.pos.lng === nextProps.pos.lng) {
      console.log('Stop map');
      return false;
    } else {
      return true;
    }
  }
  componentDidMount() {
    if (this.props.pos) {
      console.log("Rendered-map");
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
    console.log(this.constructor.name);
    console.log(this.props);
    return (
      <div ref='map' id='map-container'></div>
    )
  }
}

export default Map;