import React, { useState } from "react";
import "./styles.css";
import { Switch, Route } from "react-router-dom";
import Image from "./components/Image";
import Header from "./components/Header";
import PopularRepo from "./components/PopularRepo";
import RepoInfo from "./components/RepoInfo";

import { withRouter } from "react-router";
function App() {
  const [name, setName] = useState("");
  const [data, setdata] = useState({});
  let flag = false;
  function handleSubmit(e) {
    e.preventDefault();
    fetch(`https://api.github.com/users/${name}`)
      .then((res) => {
        return res.json();
      })
      .then((value) => {
        if (value.message === "Not Found") {
          alert("Enter Valid Name");
        } else {
          console.log(value);
          setdata(value);
        }
      });
    flag = true;
  }
  return (
    <div className="App">
      <h1 className="heading">Github User Profile</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="input-elem"
          type="text"
          value={name}
          placeholder="Enter User Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <button className="btn" type="submit">
          Search
        </button>
      </form>
      <Switch>
        <Route path="/" exact>
          <Header />
          <div className="overview">
            <Image data={data} />
            <PopularRepo />
          </div>
        </Route>
        <Route path="/repos" exact>
          <Header />
          <div className="overview">
            <Image data={data} />
            <RepoInfo />
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
