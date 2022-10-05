import React from 'react';
import { Button } from 'react-bootstrap';
import classnames from 'classnames/bind';
import styles from './button.module.scss';

const cx = classnames.bind(styles);
// "mx-3 my-3 px-3 p-2 font-monospace"
const Buttons = (props) => {
  return (
    <div>
      <Button
        className={cx(styles.buttonStyle, 'mx-3 my-3 p-2 font-monospace fa-border')}
        variant={props.variant}
        onClick={props.clicked}
        {...props}>
        {props.children}
      </Button>
    </div>
  );
};

export default Buttons;
