import React from 'react';
import { Form } from 'react-bootstrap';

const Switch = (props) => {
  return (
    <div>
      <Form.Check type='switch' id={props.id} label={props.label} />
    </div>
  );
};

export default Switch;
