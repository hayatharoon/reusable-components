import React from 'react';
import CustomNavbar from './Components/CustomNavbar';
import LayoutTable from './Components/TableLayout/LayoutTable';

const App = () => {
  return (
    <div className="App">
      <CustomNavbar />
      <LayoutTable>
        <LayoutTable.Header list={['Id', 'Name', 'City', 'Profession']} />
        <LayoutTable.Body
          list={[
            { id: 1, name: 'Haroon', city: 'Swat', profession: 'Programmer' },
            { id: 2, name: 'Faisal', city: 'Multan', profession: 'React Developer' },
            { id: 3, name: 'Basit', city: 'Quetta', profession: 'React Developer' },
            { id: 4, name: 'Hamza', city: 'Karachi', profession: 'Javascript Developer' },
            { id: 5, name: 'Tariq', city: 'Islamabad', profession: 'UI Developer' }
          ]}
        />
        <LayoutTable.Footer list={['2022', 'Atrialogic', 'Pindi', 'Islamabad']} />
      </LayoutTable>
    </div>
  );
};

export default App;
