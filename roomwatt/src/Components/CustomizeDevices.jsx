import React from "react";
import { useState } from "react";
import expand from '../assets/back-white.svg';
import expanded from '../assets/down-green.svg';

function CustomizeDevices(props) {

    const [active, setActive] = useState("");
    const [open, setOpen] = useState(false);

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

                                <button id="expand-device-btn"><img src={device === active ? expanded : expand} alt={"EXPAND"} /></button>
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