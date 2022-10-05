import React from 'react';
import { Form } from 'react-bootstrap';
import './radio.scss';

const Radio = (props) => {
  return (
    <div>
      <Form.Check inline id={props.id} name={props.name} type="radio" />
      {props.children ? (
        <Form.Check.Label htmlFor={props.id}>{props.children}</Form.Check.Label>
      ) : null}
    </div>
  );
};

export default Radio;
