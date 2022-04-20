import React from "react";
import "./Image.css";
import PopularRepo from "./PopularRepo";

const Image = (props) => {
  return (
    <div className="main-container">
      <div className="image-container">
        <img src={props.data.avatar_url} alt="img"></img>
        <div className="username">{props.data.name}</div>
        <div className="loginname">{props.data.login}</div>
        <button className="image-btn">Follow</button>
        <div className="following-data">
          <span>{props.data.followers} Followers </span>
          <span>{props.data.following} Following</span>
        </div>
        <div className="block">Block or Report</div>
      </div>
    </div>
  );
};

export default Image;
