import React from 'react';
import Cookies from 'universal-cookie';
import Button from '../ui/button';

class DarkModeButton extends React.Component {
  constructor(props) {
    super(props);
    // load cookies
    const cookies = new Cookies();
    this.state = {
      // set default darkMode to false
      darkMode: cookies.get('dark-mode') || 'false',
      onText: 'Dark Mode On',
      offText: 'Dark Mode Off',
    }
    this.onClickDarkMode = this.onClickDarkMode.bind(this);
  }

  onClickDarkMode(e) {
    e.preventDefault();
    // load cookies
    const cookies = new Cookies();
    if (this.state.darkMode === 'true') {
      cookies.set('dark-mode', 'false', { path: '/' });
      this.setState({ darkMode: 'false' }, () => window.location.reload(true));
    } else {
      cookies.set('dark-mode', 'true', { path: '/' });
      this.setState({ darkMode: 'true' }, () => window.location.reload(true));
    }
    console.log(cookies.get('dark-mode'));
  }

  render() {
    // display Home Page button
    const text = (this.state.darkMode === 'true') ? this.state.onText : this.state.offText;
    return (
      <Button
        link={"#"}
        onClick={this.onClickDarkMode}
        text={text}
        title={"Dark Mode Switch"}
      />
    )
  }
}

export default DarkModeButton;