/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Redirect } from "react-router-dom";
import { getRepos } from "../api/repos";
class Home extends React.Component {
  state = {
    user: JSON.parse(localStorage.getItem("user")),
    repos: [],
    loading: true,
  };
  componentDidMount() {
    getRepos()
      .then((Response) => {
        this.setState({
          repos: Response.data.items,
          loading: false,
        });
      })
      .catch((error) => {
        alert(error);
      });
  }
  render() {
    if (localStorage.getItem("user") == null) {
      return <Redirect to="/" />;
    }
    if (this.state.loading) {
      return (
        <div className="loading">
          <img
            src="https://media.giphy.com/media/RgzryV9nRCMHPVVXPV/giphy.gif"
            height="80"
            width="80"
            alt="loading..."
          ></img>
        </div>
      );
    }
    return (
      <div>
        <img src={this.state.user.imageUrl} alt="" />
        <h2>{this.state.user.name}</h2>
        <h6>{this.state.user.email}</h6>
        <table id="table" className="table-striped table-bordered">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Repos URL</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {this.state.repos.map((item) => (
              <tr key={item.id}>
                <td>{item.full_name}</td>
                <td><a href={item.owner.repos_url} target="_blank">{item.owner.repos_url}</a></td>
                <td>{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Home;
