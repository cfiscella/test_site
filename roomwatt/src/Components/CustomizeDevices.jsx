import React from "react";
import { useState } from "react";
import expand from '../assets/back-white.svg'

function CustomizeDevices(props) {

    const [active, setActive] = useState("");

    function deviceClicked(device) {
        if(device === active) {
            setActive("");
        } else {
            setActive(device);
        }
    }

    return(
        <>
            <div className="list-wrapper">
                <p className="list-title">Your Devices</p>
                <div className="list-container">
                    {props.selectedDevices.map((device, index) => (
                        <div key={index}>
                            <div className="common-name-group" onClick={() => deviceClicked(device)}>
                                <p className={ active === device ? "common-name common-name-active" : "common-name"}>
                                    {device}
                                </p>

                                <button id="expand-device-btn"><img src={expand} alt={"EXPAND"} /></button>
                            </div>

                            <hr style={{ display : index === props.selectedDevices.length-1 && "none" }}/>
                        </div>
                    ))}  
                    <div className='list-spacer'></div>
                </div>
            </div>
        </>
    )
}

export default CustomizeDevices;