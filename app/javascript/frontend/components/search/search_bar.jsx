import React from 'react';

class SearchBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      searchLine: this.props.search
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(e) {
    return this.setState({searchLine: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchSearchResult(this.state.searchLine);
  }

  handleReset(e) {
    e.preventDefault();
    this.props.fetchSearchResult('');
    this.setState({searchLine: ''});
  }

  render() {
    console.log('Search:')
    console.log(this.props);
    const currentSearch = (this.props.search.length > 0) ? `Search result of: ${this.props.search} ` : '';
    const resetButton = (this.props.search.length > 0) ? <button onClick={this.handleReset}>Reset Search</button> : '';
    return(
      <div className='search-bar'>
        <form>
          <label>
            Search by name:
            <input 
              type='text' 
              onChange={this.handleChange} 
              value={this.state.searchLine} 
            />
            <button onClick={this.handleSubmit}>Search</button>
          </label>
        </form>
        <p>{currentSearch} {resetButton}</p>
      </div>
    )
  };
}

export default SearchBar;