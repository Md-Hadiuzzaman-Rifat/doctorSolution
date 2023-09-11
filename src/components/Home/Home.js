import React from "react";
import Header from "../Header/Header";
import AvailableAppointment from "../AvailableAppointment/AvailableAppointment";
import "./Home.css";
import Subscription from "../Subscription/Subscription";
import Features from "../Features/Features";
import CoreObject from "../CoreObject/CoreObject";
const Home = () => {
  return (
    <div>
      <Header></Header>
      <AvailableAppointment></AvailableAppointment>
      <div className="videoContainer">
        <div className="videoOverlay"></div>
        <div className="btn">
          <button className="blueButton mr-8">Offline Appointment</button>
          <button className="blueButton">Online Appointment</button>
        </div>
        <video src="/images/videoGirl.mp4" autoPlay loop muted></video>
      </div>
      <Subscription></Subscription>
      <Features></Features>
      <CoreObject></CoreObject>
    </div>
  );
};

export default Home;
