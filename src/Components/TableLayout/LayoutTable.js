import React from 'react';
import { Table } from 'react-bootstrap';

const LayoutTable = ({ children }) => {
  return <Table>{children}</Table>;
};

const Header = ({ list }) => {
  return (
    <thead className=''>
      <tr>
        {list?.map((item, key) => {
          return <th key={key}>{item}</th>;
        })}
      </tr>
    </thead>
  );
};
const Body = ({ list }) => {
  return (
    <tbody>
      {list.map((item) => (
        <tr key={item.id}>
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
