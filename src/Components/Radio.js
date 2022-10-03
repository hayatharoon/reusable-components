import React from 'react';
import { Form } from 'react-bootstrap';

const Radio = (props) => {
  return (
    <div>
      <Form.Check inline label={props.label} name={props.name} type='radio' />
    </div>
  );
};

export default Radio;
