import React from 'react';
import ReactDOM from 'react-dom';

class Map extends React.Component {

  componentDidMount() {
    if (false) {
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
    } else {
      console.log("Map function currently not available.");
    }
  }
  
  render() {
    return (
      <div ref='map' id='map-container'>
        <p>Map function currently not available.</p>
      </div>
    )
  }
}

export default Map;