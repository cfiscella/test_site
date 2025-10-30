import React from "react";
import createRoomSVG from "../assets/add-room-btn.svg"
import { useNavigate } from "react-router-dom";

function AddRoomButton(props) {

    const navigate = useNavigate();

    function enterCreateRoom() {
        console.log("navigating to create room.")
        navigate(`/createroom/`);
    }

    return(
        <>
            <button className="add-room-button" onClick={() => enterCreateRoom()}>
                <img src={createRoomSVG} alt=""/>
            </button>
        </>
    )
}

export default AddRoomButton;