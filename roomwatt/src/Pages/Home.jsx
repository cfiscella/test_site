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
                </div>
            </section>
        </>
    )
}

export default Home;