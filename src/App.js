import React, { useState } from 'react';
import Buttons from './Components/Button/Buttons';
import Checkbox from './Components/Checkbox/Checkbox';
import CustomNavbar from './Components/Navbar/CustomNavbar';
import ModalComponent from './Components/Modal/ModalComponent';
import Switch from './Components/Switch/Switch';
import BreadCrumbComponent from './Components/Breadcrumb/BreadCrumbComponent';
import LayoutTable from './Components/TableLayout/LayoutTable';
import Radio from './Components/Radio/Radio';
import Popover from './Components/Popover/Popover';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  return (
    <div className="App">
      <CustomNavbar />
      <h5>Button Component</h5>
      <Buttons variant="success">Click Me</Buttons>
      <hr />
      <h5>Switch Component</h5>
      <Switch className="switchStyle">Dark Mode</Switch>
      <hr />
      <h5>Checkboxes</h5>
      <Checkbox label="React.JS" />
      <Checkbox label="Angular" />
      <Checkbox label="Vue" />
      <hr />
      <h5> Modal Component</h5>
      <Buttons variant="danger" clicked={() => setShowModal(true)}>
        Click Me to Open the Modal
      </Buttons>
      <ModalComponent
        show={showModal}
        content="Customize each component with sass(mix-ins , advance selectors) and make a custom reusable component for each component of react-bootstrap mentioned below :"
        onHide={handleClose}
        buttonText="Close"
      />
      <hr />
      <h5> Bread Crumb Component</h5>
      <BreadCrumbComponent />

      <hr />
      <h5>Table Component</h5>
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

      <hr />
      <h5>Radio Component</h5>
      <Radio name="gender">Male</Radio>
      <Radio name="gender">Female</Radio>
      <Radio name="gender">Others</Radio>

      <hr />
      <h5>Popover Component</h5>
      <Popover placement="right" popoverText="Hello World">
        Hover me to see the popover effect
      </Popover>
    </div>
  );
};

export default App;

{
  /* <LayoutTable>
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
      </LayoutTable> */
}
