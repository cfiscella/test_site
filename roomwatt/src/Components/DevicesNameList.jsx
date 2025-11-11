import React, { useState } from 'react';
import notSelected from '../assets/not-selected-white.svg'
import selected from '../assets/selected-green.svg'

function DevicesNameList(props) {

    const commonDevices = ["Air conditioner", "Air fryer", "Blender", "Ceiling fan", "Coffee maker", "Computer", "Dehumidifier", "Dishwasher", "Dryer", "Electric kettle", "Electric stove", "Electric toothbrush", "Electric vehicle charger", "Hair dryer", "Heater", "Humidifier", "Iron", "Lamp", "Laptop", "Microwave", "Modem", "Monitor", "Outdoor grill", "Oven", "Phone charger", "Printer", "Projector", "Refrigerator", "Rice cooker", "Router", "Security camera", "Smart speaker", "Slow cooker", "Sound system", "Table fan", "Television", "Toaster", "Vacuum cleaner", "Video game console", "Washing machine", "Water heater"];

    function deviceClicked(device) {
        if(props.selectedDevices.includes(device)) {
            props.setSelectedDevices(props.selectedDevices.filter(d => d !== device))
        }

        else {
            props.setSelectedDevices((prevDevices) => [...prevDevices, device]);
        }
    }

    return(
        <>
        <div className="list-wrapper">
            <p className="list-title">Common Devices</p>
            <div className="list-container">
                {commonDevices.map((device, index) => (
                    <div key={index}>
                        <div className="common-name-group" onClick={() => deviceClicked(device)}>
                            <p className={ props.selectedDevices.includes(device) ? "common-name common-name-active" : "common-name"}>
                                {device}
                            </p>

                            <img src={props.selectedDevices.includes(device) ? selected : notSelected} />
                        </div>

                        <hr/>
                    </div>
                ))}                
            </div>
        </div>
        </>
    )
}

export default DevicesNameList;