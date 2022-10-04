import React from 'react';

const TableComponent = ({ list }) => {
  return (
    <thead>
      <tr>
        {list.map((item, key) => {
          return <th key={key}>{item}</th>;
        })}
      </tr>
    </thead>
  );
};

export default TableComponent;
