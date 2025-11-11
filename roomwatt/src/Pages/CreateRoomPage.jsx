import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import back from '../assets/back-white.svg'
import close from '../assets/close-white.svg'
import { useNavigate } from "react-router-dom";
import RoomNameList from "../Components/RoomNameList";

function CreateRoomPage() {

    const indexText = [
        {
            header: "Choose a room",
            subtext: "Where do you have your electronics and appliances? Here is a list of common rooms to choose from."
        },

        {
            header: "Add devices to room",
            subtext: "Select all electronics found in room."
        }
    ]

    const [index, setIndex] = useState(0);

    const navigate = useNavigate();

    function incrementIndex() {
        if(index < indexText.length - 1) { setIndex(index + 1) };
        console.log("index:", index);
    }

    function decrementIndex() {
        if(index > 0) { setIndex(index - 1) };
        console.log("index:", index);
    }

    function goHome() {
        console.log("navigating home.");
        navigate(`/`);
    }

    return(
        <>
            <section id="create-room-page">
                <div className="back-and-exit-group">
                    <button onClick={() => decrementIndex()}>
                        <img src={back} alt="BACK"/>
                    </button>

                    <button onClick={() => goHome()}>
                        <img src={close} alt="CLOSE" />
                    </button>
                </div>

                <h1 className="add-room-process-header">{indexText[index].header}</h1>
                <p className="add-room-process-subtext">{indexText[index].subtext}</p>

                {
                
                index === 0 ? <RoomNameList /> 
                : null
                
                }

                <Button variant="success" className="bottom-primary-button  rounded-pill" onClick={() => incrementIndex()}>Next</Button>

            </section>
        </>
    )
}

export default CreateRoomPage;