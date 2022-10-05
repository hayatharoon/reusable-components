import React from 'react';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import styles from './popover.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

const Popover = (props) => {
  const renderTooltip = (prop) => (
    <Tooltip id="button-tooltip" className={cx(styles.popover, '')} {...prop}>
      {props.popoverText}
    </Tooltip>
  );
  return (
    <div>
      <OverlayTrigger
        className=""
        placement={props.placement}
        delay={{ show: 250, hide: 450 }}
        overlay={renderTooltip}>
        <Button variant="danger" className={cx(styles.popoverButton, 'm-2 font-monospace')}>
          {props.children}
        </Button>
      </OverlayTrigger>
    </div>
  );
};

export default Popover;
