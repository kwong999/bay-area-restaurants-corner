import React from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';

class SearchBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      searchLine: this.props.search,
      searchText: 'Search by name:',
      searchButton: 'Search'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    return this.setState({searchLine: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.receiveSearch(this.state.searchLine);
  }

  render() {
    const { currentPathname } = this.props;
    return(
      <li className={`search ${currentPathname === "/search" ? "active" : ""}`}>
        <form>
          <label>
            {this.state.searchText}
            <input 
              type='text'
              onChange={this.handleChange}
              value={this.state.searchLine} 
            />
          </label>
          <button onClick={this.handleSubmit}><Link to="/search">{this.state.searchButton}</Link></button>
        </form>
      </li>
    )
  };
}

export default SearchBar;