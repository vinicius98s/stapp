import React, { useContext } from 'react';
import { IconButton, Icon } from '@chakra-ui/core';
import { AuthenticationContext } from '../../context/Authentication';
import { useHistory } from 'react-router-dom';

const Signout = () => {
  const history = useHistory();
  const { setToken } = useContext(AuthenticationContext);

  const handleClick = () => {
    if (setToken) setToken('');
    history?.push('/login');
  };

  return (
    <IconButton
      onClick={handleClick}
      variant="outline"
      icon={() => <Icon name="signout" />}
      aria-label="Sign out"
    />
  );
};

export default Signout;
