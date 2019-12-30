import React from 'react';
import { Redirect } from 'react-router-dom';
import './SignIn.css';
import { ApiService } from './api-service';
import { AuthService } from './auth-service';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBusy: false,
      hasFailed: false,
      showInputErrors: false,
      username: '',
      password: '',
      touchedUsername: false,
      touchedPassword: false,
      navigate: ''
    };
    this.doSignIn = this.doSignIn.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  doSignIn(e) {
    e.preventDefault();
    if (this.state.username === '' || this.state.password === '') {
      this.setState({ showInputErrors: true });
      return;
    }
    this.setState({ isBusy: true, hasFailed: false });
    ApiService.signIn(this.state.username, this.state.password)
      .then(response => {
        AuthService.doSignIn(response.data.token, response.data.name);
        this.setState({ navigate: '/todos' });
      })
      .catch(error => {
        this.setState({ isBusy: false, hasFailed: true });
      });
  }

  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    if (this.state.navigate) {
      return <Redirect to={this.state.navigate} />;
    }
    return (
      <div className="sign-in-wrapper">
        <form onSubmit={this.doSignIn}>
          <h1>Todos</h1>
          <input
            type="text"
            placeholder="Your username"
            value={this.state.username}
            onChange={this.handleUsernameChange}
          />
          {(this.state.username === '' && this.state.touchedUsername) ||
          this.state.showInputErrors ? (
            <div className="input-errors">
              <div>Please enter your username</div>
            </div>
          ) : null}
          <input
            type="password"
            placeholder="Your password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
          {(this.state.password === '' && this.state.touchedPassword) ||
          this.state.showInputErrors ? (
            <div className="input-errors">
              <div>Please enter your password</div>
            </div>
          ) : null}
          {this.state.hasFailed ? (
            <div className="sign-in-error">Invalid username or password</div>
          ) : null}
          <button className="bottom-button" disabled={this.state.isBusy}>
            {this.state.isBusy ? 'Signing in, please wait...' : 'Sign in'}
          </button>
          <p className="tip">You can sign in with username "demo" and password "demo".</p>
        </form>
      </div>
    );
  }
}

export default SignIn;
