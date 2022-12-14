import React from "react";
import ImageGroup from "../assets/Group.png";

export default function MainContent() {
  return (
    <section className="main">
      <img className="main--image" src={ImageGroup} alt="ImageGroup" />
      <h1 className="main--title">Online Experiences</h1>
      <p className="main--text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
