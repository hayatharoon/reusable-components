import React from 'react';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';

const Popover = (props) => {
  const renderTooltip = (prop) => (
    <Tooltip id='button-tooltip' className='' {...prop}>
      {props.popoverText}
    </Tooltip>
  );
  return (
    <div>
      <OverlayTrigger placement={props.placement} delay={{ show: 250, hide: 450 }} overlay={renderTooltip}>
        <Button variant='danger' className='m-3 font-monospace'>
          {props.label}
        </Button>
      </OverlayTrigger>
    </div>
  );
};

export default Popover;
