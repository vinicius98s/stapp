import React from 'react';
import { BoxProps, Stack, Alert, AlertIcon, Box } from '@chakra-ui/core';

import FormInput from './Input';

type FormProps = {
  errors?: string[];
} & BoxProps;

const Form: React.FC<FormProps> & { Input: typeof FormInput } = ({
  errors,
  children,
  ...props
}) => {
  return (
    <Box as="form" {...props}>
      {errors?.length &&
        errors.map((error, i) => (
          <Stack spacing={3} key={i}>
            <Alert status="error">
              <AlertIcon />
              {error}
            </Alert>
          </Stack>
        ))}
      {children}
    </Box>
  );
};

Form.Input = FormInput;

export default Form;
