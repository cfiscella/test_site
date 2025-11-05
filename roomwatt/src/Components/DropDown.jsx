import React, { useEffect, useState } from "react";

function DropDown(props) {

    const [choice, setChoice] = useState(props.defaultChoice);
    
    return(
        <>
            <div>
                <button className={'dropdown-btn'} onClick={() => props.setOpen(!props.open)}>{String(choice)}</button>

                {props.open && (
                    <div className="dropdown-list">
                        {props.choices.map((room, index) => (
                            <p key={index} onClick={()=> {setChoice(props.choices[index])}}>
                                {room}
                            </p>
                        ))} 
                    </div>
                )}
            </div>
        </>
    )
}

export default DropDown;