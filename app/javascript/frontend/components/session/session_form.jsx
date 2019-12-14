import React from 'react';

class SessionForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(type) {
    return e => this.setState({ [type]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    switch (this.props.formType) {
      case 'login':
      case 'signup':
        return this.props.processForm(user);
      default:
        return null;
    }
  }

  renderErrors() {
    return (
      <ul className='session-errors'>
        {this.props.errors.map((error, idx) => (
          <li key={`error-${idx}`}>{error}</li>
        ))}
      </ul>
    )
  }

  render() {
    const type = this.props.formType === 'login' ? 'Log In' : 'Sign Up'; 
    return(
      <div className='session'>
        <div className='session-title'><p>{type}</p></div>
        {this.renderErrors()}
        <form className='session-form'>
          <label>
            <p>Username:</p>
            <input
              type='text'
              onChange={this.handleChange('username')}
              value={this.state.username}
              placeholder='username'
            />
          </label>
          <label>
            <p>Password:</p>
            <input
              type='password'
              onChange={this.handleChange('password')}
              value={this.state.password}
              placeholder='password'
            />
          </label>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  };
};

export default SessionForm;