import React from 'react';

class PageLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: this.props.currentPage,
      limit: this.props.limit,
      totalItem: this.props.totalItem,
      maxPage: Math.ceil(this.props.totalItem / this.props.limit)
    }
  }

  handleChangePage(type, num) {
    const currentPage = this.state.currentPage;
    const maxPage = this.state.maxPage;
    // fix boundary cases at page limit
    if (type === 'prev' && currentPage === 1) return null;
    if (type === 'next' && currentPage === maxPage) return null;
    let toPage;
    switch (type) {
      case 'prev':
        toPage = this.state.currentPage - 1;
        break;
      case 'next':
        toPage = this.state.currentPage + 1;
        break;
      case 'to':
        toPage = num;
        break;
    }
    return (e) => {
      e.preventDefault();
      this.setState({ currentPage: toPage });
      this.props.updateParentState("currentPage", toPage);
    }
  }

  render() {
    // page line will not display when there is only one page
    if (this.state.maxPage <= 1) return null;
    console.log("PageLine State: ")
    console.log(this.state.currentPage);
    return (
      <>
        <button onClick={this.handleChangePage('prev')}>{'<'}</button>
        <p>{this.state.currentPage}/{this.state.maxPage}</p>
        <button onClick={this.handleChangePage('next')}>{'>'}</button>
      </>
    )
  }
}

export default PageLine;