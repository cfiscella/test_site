import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import back from '../assets/back-white.svg'
import close from '../assets/close-white.svg'
import { useNavigate } from "react-router-dom";
import RoomNameList from "../Components/RoomNameList";
import DevicesNameList from "../Components/DevicesNameList";
import CustomizeDevices from "../Components/CustomizeDevices";
import logo from "../assets/roomwatt-logo.svg"

function CreateRoomPage() {

    const [selectedRoom, setSelectedRoom] = useState("");
    const [selectedDevices, setSelectedDevices] = useState([]);
    const [deviceSettings, setDeviceSettings] = useState([]);

    const indexText = [
        {
            header: "Choose a room",
            subtext: "Where do you have your electronics and appliances? Here is a list of common rooms to choose from."
        },

        {
            header: "Add devices",
            subtext: "Select all electronic devices found in " + selectedRoom + "."
        },

        {
            header: "Adjust device settings",
            subtext: "Choose if each device stays plugged in, add hours of use or sleep, and review their energy impact."
        }
    ]

    const [index, setIndex] = useState(0);

    const navigate = useNavigate();

    function incrementIndex() {
        if(index < indexText.length - 1) { setIndex(index + 1) };
        console.log("index:", index);
    }

    function decrementIndex() {
        if(index > 0) { 
            setIndex(index - 1) 
        } else {
            navigate(`/`);
        }
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

                    <img src={logo} alt="LOGO" style={{height:"38px"}}/>

                    <button onClick={() => goHome()}>
                        <img src={close} alt="CLOSE"/>
                    </button>
                </div>

                <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center", marginBottom:"10px", paddingRight:"8px"}}><h1 className="add-room-process-header">{indexText[index].header}</h1></div>
                <p className="add-room-process-subtext">{indexText[index].subtext}</p>

                {
                
                  index === 0 ? <RoomNameList setSelectedRoom={setSelectedRoom} selectedRoom={selectedRoom} /> 
                : index === 1 ? <DevicesNameList setSelectedDevices={setSelectedDevices} selectedDevices={selectedDevices} />
                : index === 2 ? <CustomizeDevices selectedDevices={selectedDevices} setDeviceSettings={setDeviceSettings} deviceSettings={deviceSettings} />
                : null
                
                }

                <Button 
                    variant="success" 
                    className="bottom-primary-button  rounded-pill" 
                    onClick={() => incrementIndex()}
                    disabled= {
                        index === 0 ? selectedRoom ? false : true : 
                        index === 1 ? selectedDevices.length !== 0 ? false : true :
                        false
                    }
                >
                    Next
                </Button>

            </section>
        </>
    )
}

export default CreateRoomPage;

