import React from 'react';
import { Button } from 'react-bootstrap';

const Buttons = (props) => {
  return (
    <div>
      <Button
        className="mx-3 my-3 px-3 p-2 font-monospace"
        variant={props.variant}
        onClick={props.handleclick}
        {...props}>
        {props.children}
      </Button>
    </div>
  );
};

export default Buttons;
