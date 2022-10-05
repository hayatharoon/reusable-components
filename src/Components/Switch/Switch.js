import React from 'react';
import { Form } from 'react-bootstrap';
import './switch.scss';

const Switch = (props) => {
  return (
    <div>
      <Form.Check type="switch" id={props.id} className="switchStyle" />
      {props.children ? (
        <Form.Check.Label htmlFor={props.id}>{props.children}</Form.Check.Label>
      ) : null}
    </div>
  );
};

export default Switch;
