import React, { useState } from "react";
import DropDown from "../Components/DropDown.jsx";
import AddAppliance from "./AddAppliancePage.jsx"
import Button from 'react-bootstrap/Button';
import plug from '../assets/plug.svg'
import { useNavigate } from "react-router-dom";

function CreateRoomPage() {

    const [room, setRoom] = useState("");
    
    const choices = ["My Bedroom", "Living Room", "Second Bedroom", "Dining Room", "Kitchen", "Study Room"]

    const navigate = useNavigate();
    
        function enterAddAppliance() {
            console.log("navigating to create room.")
            navigate(`/addappliance/`);
        }

    return(
        <>
            <section id="create-room-page">
                <DropDown defaultChoice={"Choose Room"} choices={choices}/>
                <img src={plug} alt="PLUG"/>
                <Button variant="primary" onClick={() => enterAddAppliance()}>Add Appliance</Button>
            </section>
        </>
    )
}

export default CreateRoomPage;