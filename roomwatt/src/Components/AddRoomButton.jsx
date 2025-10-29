import React from "react";
import createRoomSVG from "../assets/add-room-btn.svg"

function AddRoomButton() {
    return(
        <>
            <button className="add-room-button">
                <img src={createRoomSVG} alt=""/>
            </button>
        </>
    )
}

export default AddRoomButton;