import React from "react";
import check from '../assets/check-white.svg';

function RoomNameList(props) {

    const commonRooms = ["Bedroom", "Living room", "Kitchen", "Main bedroom", "Family room", "Dining room", "Office", "Basement", "Den", "Lounge", "Grarge", "Hallway", "Outdoor lights", "Patio", "Backyard", "Front room", "Play room"]

    return(
        <>
        <div className="common-room-name-wrapper">
            <p className="add-room-process-container-title">Common Rooms</p>
            <div className="common-room-name-container">
                {commonRooms.map((room, index) => (
                    <div key={index}>
                        <div className="common-room-name-group">
                            <p>{room}</p>
                            <img src={check} alt="CHECK MARK"/>
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