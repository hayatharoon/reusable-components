import React from 'react';

const TableRow = ({ list }) => {
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

export default TableRow;
