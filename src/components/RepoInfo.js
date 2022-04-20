import React from "react";
import "./RepoInfo.css";
import { Link } from "react-router-dom";

const RepoInfo = () => {
  return (
    <div className="container">
      <div className="title">
        <Link className="repo-link">Simple HTML Page</Link>
        <span className="publics">Public</span>
      </div>
      <p className="details">Forked from VinayKumar1512/SimpleHTMLPage</p>
    </div>
  );
};

export default RepoInfo;
