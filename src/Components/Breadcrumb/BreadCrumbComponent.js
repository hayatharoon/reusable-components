import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import styles from './breadcrumb.module.scss';

const BreadCrumbComponent = () => {
  return (
    <Breadcrumb className={styles.breadcrumb}>
      <Breadcrumb.Item href="#home">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="#features">Features</Breadcrumb.Item>
      <Breadcrumb.Item href="#about">About</Breadcrumb.Item>
      <Breadcrumb.Item href="#contact-us">Contact-Us</Breadcrumb.Item>
      <Breadcrumb.Item className={styles.breadcrumbActiveItem} active>
        Data
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreadCrumbComponent;
