import React, { useState } from "react";
import check from '../assets/check-green.svg';

function RoomNameList(props) {

    const commonRooms = ["Bedroom", "Living room", "Kitchen", "Main bedroom", "Family room", "Dining room", "Office", "Basement", "Den", "Lounge", "Grarge", "Hallway", "Outdoor lights", "Patio", "Backyard", "Front room", "Play room"]

    function roomClicked(room) {
        if(room === props.selectedRoom) {
            props.setSelectedRoom("");
        } else {
            props.setSelectedRoom(room);
        }
    }

    return(
        <>
        <div className="list-wrapper">
            <p className="list-title">Common Rooms</p>
            <div className="list-container">
                {commonRooms.map((room, index) => (
                    <div key={index}>
                        <div className="common-name-group" onClick={() => roomClicked(room)}>
                            <p className={ props.selectedRoom === room ? "common-name common-name-active" : "common-name"}>
                                {room}
                            </p>

                            <img 
                            src={check} 
                            alt="CHECK MARK"
                            style={{ display: props.selectedRoom !== room ? "none" : "inline"}}
                            />
                        </div>
                        <hr/>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default RoomNameList;