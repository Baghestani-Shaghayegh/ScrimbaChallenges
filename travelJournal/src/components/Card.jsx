import React from "react";
import location from "../assets/location.png";

export default function Card(props) {
  return (
    <div>
      <div className="card">
        <img className="card--image" src={`/src/assets/${props.image}`} />
        <section className="section">
          <div className="card--location">
            <img src={location} alt="Location" className="location-icon" />
            <span className="location-span">{props.location}</span>
            <a href={props.googleMapsUrl}>View on Google Maps</a>
          </div>
          <h3 className="card--title">{props.title}</h3>
          <h1 className="card--date">
            {props.startDate} ~ {props.endDate}
          </h1>
          <p className="card--description">{props.description}</p>
        </section>
      </div>
      <hr className="border" />
    </div>
  );
}
