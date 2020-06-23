import React, { useEffect } from 'react';
import { Flex, Box, Divider } from '@chakra-ui/core';
import { Link } from 'react-router-dom';

import { LOGIN } from '../../../../common/apollo/mutations/authentication';

import Button from '../../components/Button';
import Form from '../../components/Form';
import { useMutation } from '@apollo/react-hooks';

const Login: React.FC = () => {
  const [login, { data, loading, error }] = useMutation(LOGIN);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    await login({
      variables: {
        input: { email: 'vinicius@sales.com.br', password: 'vinicius' },
      },
    });
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Flex h="100vh" alignItems="center" justify="center" direction="column">
      <Form
        minW={325}
        onSubmit={handleSubmit}
        errors={error ? [error.message] : []}
      >
        <Form.Input
          placeholder="email@example.com"
          id="email"
          label="Email address"
          type="email"
          disabled={loading}
        />
        <Box h={8} />
        <Form.Input
          type="password"
          id="password"
          label="Password"
          placeholder="••••••••"
          disabled={loading}
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
