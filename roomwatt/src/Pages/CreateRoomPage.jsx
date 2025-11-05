import React, { useEffect, useState } from "react";
import DropDown from "../Components/DropDown.jsx";
import AddAppliance from "./AddAppliancePage.jsx"
import Button from 'react-bootstrap/Button';
import plug from '../assets/plug.svg'
import { useNavigate } from "react-router-dom";

function CreateRoomPage() {

    const [room, setRoom] = useState("");

    const[open, setOpen] = useState(false);
    const[display, setDisplay] = useState("flex");
    
    const choices = ["My Bedroom", "Living Room", "Second Bedroom", "Dining Room", "Kitchen", "Study Room"]

    const navigate = useNavigate();
    
        function enterAddAppliance() {
            console.log("navigating to create room.")
            navigate(`/addappliance/`);
        }

    return(
        <>
            <section id="create-room-page">
                <DropDown setOpen={setOpen} open={open} defaultChoice={"Choose Room"} choices={choices}/>

                <div className="add-appliance-group" style={{ transition: "opacity 0.2s ease-in-out", opacity: open ? "0%" : "100%" }}>
                    <img className="add-appliance-img" src={plug} alt="PLUG"/>
                    <p>No appliances yet.</p>
                    <Button className="add-appliance-button" variant="primary" onClick={() => enterAddAppliance()}>Add Appliance</Button>
                </div>
            </section>
        </>
    )
}

export default CreateRoomPage;