import React from 'react';

const ratingOptions = [
  0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0
]

class RateSelector extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rating: this.props.rating,
      action: this.props.action
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(e) {
    this.setState({ rating: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { user_id, business_id } = this.props;
    const rate = {};
    rate.user_id = user_id;
    rate.business_id = business_id;
    rate.rating = this.state.rating;
    if (this.state.action === 'Edit') {
      this.props.updateRate(rate, this.props.rate_id)
        .then(() => this.setState({ action: 'View' }));
    } else if (this.state.action === 'Create') {
      this.props.createRate(rate)
        .then(() => this.setState({ action: 'View' }));
    }
  }

  handleEdit(e) {
    e.preventDefault();
    const new_state = (this.state.action === 'View') ? 'Edit' : 'View'
    this.setState({ action: new_state });
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.destroyRate(this.props.rate_id)
      .then ( () => this.setState({ action: 'Create' }));
  }

  renderUpdateSelector() {
    return (
      <div className='rate-form'>
        <p>Update Rating:</p>
        <form>
          <label>
            Rating:
            <select onChange={this.handleChange} value={this.state.rating}>
              <option value='select one'>--select one--</option>
              {ratingOptions.map( option => (
                <option value={option} key={option}>{option}</option>
              ))}
            </select>
          </label>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
        <button onClick={this.handleEdit}>Cancel</button>
      </div>
    )
  }

  renderNewSelector() {
    return (
      <div className='rate-form'>
        <p>Give Rating:</p>
        <form>
          <label>
            Rating:
            <select onChange={this.handleChange} value={this.state.rating}>
              <option value='select one'>--select one--</option>
              {ratingOptions.map(option => (
                <option value={option} key={option}>{option}</option>
              ))}
            </select>
          </label>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }

  renderView() {
    const currentRating = (this.state.rating === 'select one') ? '-' : this.state.rating;
    return (
      <div className='rate-form'>
        <p>Current Rating:</p>
        <p>{currentRating}</p>
        <form>
          <button onClick={this.handleEdit}>Edit</button>
          <button onClick={this.handleDelete}>Delete</button>
        </form>
      </div>
    );
  }

  handleRender() {
    switch (this.state.action) {
      case 'Edit':
        return this.renderUpdateSelector();
      case 'Create':
        return this.renderNewSelector();
      case 'View':
        return this.renderView();
    }
  }

  render() {
    return(
      this.handleRender()
    )
  }
}

export default RateSelector;