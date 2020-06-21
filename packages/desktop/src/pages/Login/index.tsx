import React from 'react';
import { Flex, Box, Divider } from '@chakra-ui/core';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import Form from '../../components/Form';

const Login: React.FC = () => {
  return (
    <Flex h="100vh" alignItems="center" justify="center" direction="column">
      <Form minW={325}>
        <Form.Input
          placeholder="email@example.com"
          id="email"
          label="Email address"
          type="email"
        />
        <Box h={8} />
        <Form.Input id="password" label="Password" placeholder="••••••••" />
        <Flex mt={8} direction="row" align="center" justify="space-between">
          <Button type="submit" children="Login" />
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
