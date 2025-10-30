import React, { useState } from "react";

function DropDown(props) {

    const [open, setOpen] = useState(false);
    const [choice, setChoice] = useState(props.defaultChoice);
    
    return(
        <>
            <div>
                <button className={'dropdown-btn'} onClick={() => setOpen(!open)}>{String(choice)}</button>

                {open && (
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