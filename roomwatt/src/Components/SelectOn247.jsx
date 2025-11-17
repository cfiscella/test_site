import React from "react";
import Form from 'react-bootstrap/Form';

function SelectOn247({ checked, onChange }) {
  return (
    <>
      <Form>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="On 24/7"
          checked={checked}
          onChange={(e) => onChange && onChange(e.target.checked)}
        />
      </Form>
    </>
  );
}

export default SelectOn247;
