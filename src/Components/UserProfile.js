import React, { useReducer } from 'react';
import Buttons from './Buttons';
import ModalComponent from './ModalComponent';

const BLOCK = 'BLOCK';
const UNBLOCK = 'UNBLOCK';

export function UserProfile(props) {
  const { user } = props;

  const modalReducer = (state, action) => {
    switch (action.type) {
      case BLOCK:
        return {
          show: true,
          content: `Are you sure you want to block user ${action.user.username}?`,
          buttonText: 'Blocked'
        };
      case UNBLOCK:
        return {
          show: true,
          content: `Are you sure you want to un-block user ${action.user.username}?`,
          buttonText: 'Un-block'
        };
    }
  };
  const [modalState, modalDispatch] = useReducer(modalReducer, {
    content: '',
    show: false,
    buttonText: ''
  });

  const dispatchModalAction = (action) => {
    modalDispatch({
      type: action,
      user: {
        username: user.username
      }
    });
  };

  return (
    <>
      <h3>User: {user.username}</h3>
      <Buttons variant="primary" handleclick={() => dispatchModalAction(BLOCK)}>
        Block User
      </Buttons>
      <Buttons variant="primary" handleclick={() => dispatchModalAction(UNBLOCK)}>
        Un-Block User
      </Buttons>

      <ModalComponent
        show={modalState?.show}
        content={modalState?.content}
        buttonText={modalState?.buttonText}
      />
    </>
  );
}

export default UserProfile;
