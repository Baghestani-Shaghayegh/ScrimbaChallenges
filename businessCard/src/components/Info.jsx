import React from "react";
import Image from "../assets/image.png";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import About from "./About";
import Interests from "./Interests";
import Footer from "./Footer";

export default function Info() {
  return (
    <main>
      <article className="card">
        <img className="card--image" src={Image} alt="Image" />
        <h2 className="card--name">Sarah</h2>
        <h3 className="card--job">frontend Developer</h3>
        <h1 className="card--email">sara7space@naver.com</h1>

        <div className="buttons">
          <button className="button--email">
            <EmailIcon fontSize="small" />
            Email
          </button>
          <button className="button--linkedin">
            <LinkedInIcon fontSize="small" />
            LinkedIn
          </button>
        </div>
        <div className="card--texts">
          <About />
          <Interests />
        </div>
        <Footer/>
      </article>
    </main>
  );
}
