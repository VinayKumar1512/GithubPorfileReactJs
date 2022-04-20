import React from "react";
import Header from "./Header";
import "./Profile.css";
import Image from "./Image";

const Profile = (props) => {
  return (
    <div className="profile-container">
      <Header />
      <Image data={props.data} />
    </div>
  );
};

export default Profile;
