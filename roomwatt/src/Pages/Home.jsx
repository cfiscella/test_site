import React, { useContext } from "react";
import Button from 'react-bootstrap/Button';
import AddRoomButton from "../Components/AddRoomButton";
import RoomContext from "./RoomPage.jsx"
import { useNavigate } from "react-router-dom";

function Home() {
  return (
    <>
      <section id="home-page">
        <div className="home-top-row">
          <AddRoomButton />
          <div id="watt-rects-group">
            <div className="watt-rects" id="most-watts"></div>
            <div className="watt-rects" id="total-watts"></div>
          </div>
        </div>

        
        <div className="home-content">
          <h2 className="home-title">Track your room&apos;s energy</h2>
          <p className="home-subtitle">
            Tap the plus button to add your first room, then start adding devices to see their impact.
          </p>
        </div>
      </section>
    </>
  );
}


export default Home;