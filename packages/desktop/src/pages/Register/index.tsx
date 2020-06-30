import React, { useEffect, useState } from 'react';
import { Flex, Box, Divider, Link as ALink } from '@chakra-ui/core';
import { Link } from 'react-router-dom';

import { REGISTER } from '@common/apollo/mutations/authentication';

import Button from '@components/Button';
import Form from '@components/Form';
import { useMutation } from '@apollo/react-hooks';

const Login: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const [register, { data, called, error, loading }] = useMutation(REGISTER);

  useEffect(() => {
    if (called && !error) {
      setSuccessMessage('Registered with success');
    }
  }, [data]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    await register({
      variables: {
        input: { name, email, password, confirmPassword },
      },
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        return;
      case 'email':
        setEmail(value);
        return;
      case 'password':
        setPassword(value);
        return;
      case 'confirmPassword':
        setConfirmPassword(value);
        return;
    }
  };

  return (
    <Flex
      minH="100vh"
      // background="white"
      py={30}
      alignItems="center"
      justify="center"
      direction="column"
    >
      <Form
        minW={325}
        successMessage={
          successMessage
            ? () => (
                <Flex direction="column">
                  {successMessage}.
                  <Link to="/login">
                    <ALink>Go to login page</ALink>
                  </Link>
                </Flex>
              )
            : undefined
        }
        errors={error ? [error.graphQLErrors[0].message] : []}
        onSubmit={handleSubmit}
      >
        <Form.Input
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
          label="Name"
          placeholder="Your name"
        />
        <Box h={8} />
        <Form.Input
          id="email"
          name="email"
          label="Email address"
          type="email"
          placeholder="email@example.com"
          value={email}
          disabled={loading}
          onChange={handleChange}
          inputHelperText={{
            id: 'email-helper-text',
            text: "We'll never share your email",
          }}
        />
        <Box h={8} />
        <Form.Input
          onChange={handleChange}
          name="password"
          type="password"
          value={password}
          id="password"
          label="Password"
          placeholder="••••••••"
        />
        <Box h={8} />
        <Form.Input
          onChange={handleChange}
          value={confirmPassword}
          name="confirmPassword"
          type="password"
          id="confirm-password"
          label="Confirm password"
          placeholder="••••••••"
          disabled={loading}
        />
        <Button mt={8} isLoading={loading} type="submit" children="Register" />
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
        <Link to="/login">Already have an account?</Link>
      </Box>
    </Flex>
  );
};

export default Login;
