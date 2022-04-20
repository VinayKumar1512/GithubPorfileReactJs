import React from "react";
import "./PopularRep.css";

const PopularRepo = () => {
  return (
    <div className="repo-container">
      <p className="title">Popular Repositories</p>
      <div className="card">
        <div className="upper-part">
          <p>Simple HTML Page</p>
          <p className="public">Public</p>
        </div>
        <p className="detail">Forked from VinayKumar1512/SimpleHTMLPage</p>
        <div className="lang">
          <div className="dot"></div>
          <span>HTML</span>
        </div>
      </div>
    </div>
  );
};

export default PopularRepo;
