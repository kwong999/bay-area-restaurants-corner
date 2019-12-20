import React from 'react';
import { Redirect } from 'react-router-dom';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: this.props.currentComment,
      action: this.props.action
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCommentEdit = this.handleCommentEdit.bind(this);
    this.handleCommentDelete = this.handleCommentDelete.bind(this);
  }

  handleChange(e) {
    this.setState({ body: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { user_id, business_id } = this.props;
    const comment = {};
    comment.user_id = user_id;
    comment.business_id = business_id;
    comment.body = this.state.body;
    if (this.state.action === 'Edit') {
      this.props.updateComment(comment, this.props.comment_id)
        .then(() => this.setState({ action: 'View'}));
    } else if (this.state.action === 'Create') {
      this.props.createComment(comment)
        .then(() => this.setState({ action: 'View' }));
    }
  }

  handleCommentEdit(e) {
    e.preventDefault();
    const new_state = (this.state.action === 'View') ? 'Edit' : 'View'
    this.setState({ action: new_state });
  }

  handleCommentDelete(e) {
    e.preventDefault();
    this.props.destroyComment(this.props.comment_id)
      .then(() => this.setState({ action: 'Create' }));
  }

  renderNewForm() {
    return (
      <div className='comment-form'>
        <p>{this.state.action} review</p>
        <form>
          <label>
            <p>Your review:</p>
            <textarea
              value={this.state.body}
              onChange={this.handleChange}
              placeholder='type your review here'
              />
            <br />
            <button onClick={this.handleSubmit}>Submit</button>
          </label>
        </form>
      </div>
    );
  }

  renderUpdateForm() {
    return (
      <div className='comment-form'>
        <p>{this.state.action} review</p>
        <form>
          <label>
            <p>Your review:</p>
            <textarea value={this.state.body} onChange={this.handleChange} />
            <br />
            <button onClick={this.handleSubmit}>Submit</button>
          </label>
        </form>
        <button onClick={this.handleCommentEdit}>Cancel</button>
      </div>
    );
  }

  renderView() {
    return (
      <div className='comment-form'>
        <p>Your review:</p>
        <p>{this.state.body}</p>
        <form>
          <button onClick={this.handleCommentEdit}>Edit</button>
          <button onClick={this.handleCommentDelete}>Delete</button>
        </form>
      </div>
    );
  }

  handleRender() {
    switch(this.state.action) {
      case 'Edit':
        return this.renderUpdateForm()
      case 'Create':
        return this.renderNewForm();
      case 'View':
        return this.renderView();
    }
  }

  render() {
    return(
      this.handleRender()
    )
  };
}

export default CommentForm;