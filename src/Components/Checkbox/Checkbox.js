import React from 'react';
import { Form } from 'react-bootstrap';
import './checkbox.scss';

const Checkbox = (props) => {
  return (
    <div>
      <Form.Check inline label={props.label} name={props.name} type="checkbox" className="" />
    </div>
  );
};

export default Checkbox;
