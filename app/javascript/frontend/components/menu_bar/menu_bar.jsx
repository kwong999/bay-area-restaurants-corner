import React from 'react';
import { Link } from 'react-router-dom';

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
    const { pathname, updateMainContentState } =  this.props;
    return (
      <nav className='business-main-nav-bar'>
        <ul>
          <li
            className={pathname === "/" ? "active" : ""}
            onClick={updateMainContentState("pathname", "/")}>
            <Link to={"/"}>{this.state.buttonText.hotRestaurants}</Link>
          </li>
          <li
            className={pathname === "/all" ? "active" : ""}
            onClick={updateMainContentState("pathname", "/all")}>
            <Link to={"/all"}>{this.state.buttonText.allRestaurants}</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default MenuBar;