import React from "react";
import Form from 'react-bootstrap/Form';

function SelectOn247() {
    return(
        <>
            <Form>
                <Form.Check // prettier-ignore
                    type="switch"
                    id="custom-switch"
                    label="On 24/7"
                />
            </Form>
        </>
    )
}

export default SelectOn247;