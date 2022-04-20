import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { GithubOutlined } from "@ant-design/icons";
import { ProjectOutlined } from "@ant-design/icons";
import { StarOutlined } from "@ant-design/icons";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <Link to="/" className="item">
          <GithubOutlined className="icon" />
          Overview
        </Link>
        <Link to="/repos" className="item">
          <GithubOutlined className="icon" />
          Repositories
        </Link>
        <Link to="/projects" className="item">
          <ProjectOutlined className="icon" />
          Projects
        </Link>
        <Link to="/package" className="item">
          <GithubOutlined className="icon" />
          Packages
        </Link>
        <Link to="/stars" className="item">
          <StarOutlined className="icon" />
          Stars
        </Link>
      </div>
    </div>
  );
};

export default Header;
