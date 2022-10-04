import React from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import { Table } from 'react-bootstrap';

const TableComponent = ({ headerList, rowList }) => {
  return (
    <>
      <Table striped bordered hover>
        <TableHeader list={headerList} />
        <TableRow list={rowList} />
      </Table>
    </>
  );
};

export default TableComponent;
