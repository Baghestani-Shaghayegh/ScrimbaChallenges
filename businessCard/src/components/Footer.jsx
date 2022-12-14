import React from "react";
import InstagramIcn from "../assets/Instagram.png";
import GitHubIcn from "../assets/GitHub.png";
import FacebookIcn from "../assets/Facebook.png";
import TwitterkIcn from "../assets/Twitter.png";
export default function Footer() {
  return (
    <div>
      <footer>
        <div className="icons">
          <img src={GitHubIcn} />
          <img src={InstagramIcn} />
          <img src={FacebookIcn} />
          <img src={TwitterkIcn} />
        </div>
      </footer>
    </div>
  );
}
