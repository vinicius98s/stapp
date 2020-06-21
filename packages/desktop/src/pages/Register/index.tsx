import React from 'react';
import { Flex, Box, Divider } from '@chakra-ui/core';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import Form from '../../components/Form';

const Login: React.FC = () => {
  return (
    <Flex
      h="100vh"
      mt={60}
      mb={30}
      alignItems="center"
      justify="center"
      direction="column"
    >
      <Form minW={325}>
        <Form.Input id="name" label="Name" placeholder="Your name" />
        <Box h={8} />
        <Form.Input
          id="email"
          label="Email address"
          type="email"
          placeholder="email@example.com"
          inputHelperText={{
            id: 'email-helper-text',
            text: "We'll never share your email",
          }}
        />
        <Box h={8} />
        <Form.Input id="password" label="Password" placeholder="••••••••" />
        <Box h={8} />
        <Form.Input
          id="confirm-password"
          label="Confirm password"
          placeholder="••••••••"
        />
        <Button mt={8} type="submit" children="Register" />
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
        <Link to="/">Already have an account</Link>
      </Box>
    </Flex>
  );
};

export default Login;
