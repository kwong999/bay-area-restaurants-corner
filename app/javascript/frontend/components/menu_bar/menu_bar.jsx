import React from 'react';
import { Link } from 'react-router-dom';
import SearchBarContainer from '../search/search_bar_container';

class MenuBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: {
        // menu button name
        hotRestaurants: "Hot Restaurants",
        allRestaurants: "All Restaurants"
      }
    }
  }

  render() {
    const { currentPathname } =  this.props;
    return (
      <nav className='menu-bar'>
        <ul>
          <li
            className={currentPathname === "/" ? "active" : ""}>
            <Link to={"/"}>{this.state.buttonText.hotRestaurants}</Link>
          </li>
          <li
            className={currentPathname === "/all" ? "active" : ""}>
            <Link to={"/all"}>{this.state.buttonText.allRestaurants}</Link>
          </li>
          <SearchBarContainer currentPathname={currentPathname} />
        </ul>
      </nav>
    )
  }
}

export default MenuBar;