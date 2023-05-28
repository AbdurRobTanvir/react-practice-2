import React, { Component } from "react";
var firstForm = true;
var secondForm = true;

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailaddress: "",
      username: "",
      password: "",
    };
  }
  handleEmailChange = (event) => {
    this.setState({ emailaddress: event.target.value });
  };
  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };
  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <div>
        <div className="title">Sign Up</div>
        <from>
          <>
            {firstForm && (
              <>
                <div>
                  <input
                    className="form-element"
                    type="text"
                    placeholder="Email Address"
                    value={this.state.emailaddress}
                    onChange={this.handleEmailChange}
                  ></input>
                </div>
                <div>
                  <input
                    className="form-element"
                    type="text"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.handleUsernameChange}
                  ></input>
                </div>
                <div>
                  <input
                    className="form-element"
                    type="text"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                  ></input>
                </div>
                <button
                  className="next-button"
                  onClick={() => {
                    firstForm = false;
                    console.log(firstForm);
                  }}
                >
                  NEXT
                </button>
              </>
            )}
            {!firstForm && (
              <>
                <div>
                  <input
                    className="form-element"
                    type="text"
                    placeholder="Email Address"
                    value={this.state.emailaddress}
                    onChange={this.handleEmailChange}
                  ></input>
                </div>
              </>
            )}
          </>
        </from>
      </div>
    );
  }
}

export default SignUp;
