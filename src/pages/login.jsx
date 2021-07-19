/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import GoogleLogin from "react-google-login";
import { Redirect } from "react-router";
class Login extends React.Component {
  responseGoogle = (response) => {
    localStorage.setItem("user", JSON.stringify(response.profileObj));
    this.props.history.push("/home");
  };
  render() {
    if (localStorage.getItem("user") != null) {
      return <Redirect to="/home" />;
    }
    return (
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <form className="login100-form validate-form">
              <span className="login100-form-title p-b-43">
                Welcome to my test application
              </span>
              <div className="login100-form-social flex-c-m">
                <div className="col-md-12">
                  <GoogleLogin
                    clientId="708513211319-fg6iig3104npg95lpgr81nf80g973hrp.apps.googleusercontent.com"
                    buttonText="Login with google  account"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={"single_host_origin"}
                  />{" "}
                  {/*                   <a
                    class="btn btn-lg btn-google btn-block text-uppercase btn-outline"
                    href="#"
                  >
                    <img src="https://img.icons8.com/color/16/000000/google-logo.png" />{" "}
                    Signup Using Google
                  </a>{" "} */}
                </div>
              </div>
            </form>
            <img
              src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              className="login100-more"
              alt=""
            ></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
