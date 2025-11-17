import React from "react";
import { useState } from "react";
import expand from '../assets/back-white.svg';
import expanded from '../assets/down-green.svg';
import SelectOn247 from "./SelectOn247";

function CustomizeDevices(props) {

    const [active, setActive] = useState("");

    function deviceClicked(device) {
        if(device === active) {
            setActive("");
        } else {
            setActive(device);
        }
    }

    const defaultSettings = {
        deviceName: "James",
        on247: false
    };

    let deviceSettings = new Array(props.selectedDevices.length);
    for(let i = 0; i < props.selectedDevices.length; i++) {
        deviceSettings[i] = defaultSettings;
        deviceSettings[i].deviceName = props.selectedDevices[i];
        console.log(deviceSettings[i].deviceName);
    }

    return(
        <>
            <div className="list-wrapper">
                <p className="list-title">Your Devices</p>
                <div className="list-container">
                    {props.selectedDevices.map((device, index) => (
                        <div key={index}>
                            <div className="common-name-group" onClick={() => deviceClicked(device)}>
                                <p className={ device === active ? "common-name common-name-active" : "common-name"}>
                                    {device}
                                </p>

                                <button id="expand-device-btn"><img src={device === active ? expanded : expand} alt={"EXPAND"} /></button>
                            </div>

                            <div 
                                style={{ 
                                    maxHeight: device === active ? "100px" : "0", 
                                    flexDirection: "column", 
                                    overflowY: "hidden",
                                    transition: "max-height 0.1s ease-in-out"}}
                            >
                                <SelectOn247 />
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