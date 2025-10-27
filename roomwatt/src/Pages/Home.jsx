import React from "react";
import Button from 'react-bootstrap/Button';
import AddRoomButton from "../Components/AddRoomButton";

function Home() {

    return (
        <>
            <section id="home-page">
                <div className="home-top-row">
                    <AddRoomButton />
                    
                    <div>
                        <div className="blank-home-cards total-watts"></div>
                        <div className="blank-home-cards most-watts"></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;