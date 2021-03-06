import React, { useState, useEffect, useContext } from 'react';
import { Flex, Box, Divider } from '@chakra-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';

import { LOGIN } from '@common/apollo/mutations/authentication';

import Button from '@components/Button';
import Form from '@components/Form';
import { AuthenticationContext } from '../../context/Authentication';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const { setToken } = useContext(AuthenticationContext);

  const [login, { data, loading, error }] = useMutation(LOGIN);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    await login({
      variables: {
        input: { email, password },
      },
    });
  };

  useEffect(() => {
    if (data?.token && setToken) {
      setToken(data.token);
      history?.push('/');
    }
  }, [data]);

  return (
    <Flex h="100vh" alignItems="center" justify="center" direction="column">
      <Form
        minW={325}
        onSubmit={handleSubmit}
        errors={error ? [error.graphQLErrors[0].message] : []}
      >
        <Form.Input
          placeholder="email@example.com"
          id="email"
          label="Email address"
          type="email"
          disabled={loading}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(event.target.value)
          }
        />
        <Box h={8} />
        <Form.Input
          type="password"
          id="password"
          label="Password"
          placeholder="••••••••"
          disabled={loading}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(event.target.value)
          }
        />
        <Flex mt={8} direction="row" align="center" justify="space-between">
          <Button isLoading={loading} type="submit" children="Login" />
          <Link to="/forgot-password">Forgot password?</Link>
        </Flex>
      </Form>
      <Divider my={8} w="100%" maxW={325} />
      <Box
        maxW={325}
        p={4}
        w="100%"
        borderWidth="1px"
        rounded="lg"
        textAlign="center"
      >
        <Link to="/register">Create an account</Link>
      </Box>
    </Flex>
  );
};

export default Login;
