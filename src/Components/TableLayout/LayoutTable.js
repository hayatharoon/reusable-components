import React from 'react';
import { Table } from 'react-bootstrap';
import styles from './table.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

const LayoutTable = ({ children }) => {
  return <Table className={cx(styles.table, '')}>{children}</Table>;
};

const Header = ({ list }) => {
  return (
    <thead className="">
      <tr className={cx(styles.tableHeadRow, '')}>
        {list?.map((item, key) => {
          return (
            <th key={key} className={cx(styles.tableColumn, '')}>
              {item}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};
const Body = ({ list }) => {
  return (
    <tbody>
      {list.map((item) => (
        <tr key={item.id} className={cx(styles.tableBodyRow)}>
          {Object.values(item).map((val, key) => (
            <td key={key}>{val}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};
const Footer = ({ list }) => {
  return (
    <tfoot>
      <tr>
        {list.map((item, key) => {
          return <th key={key}>{item}</th>;
        })}
      </tr>
    </tfoot>
  );
};

LayoutTable.Header = Header;
LayoutTable.Body = Body;
LayoutTable.Footer = Footer;

export default LayoutTable;
