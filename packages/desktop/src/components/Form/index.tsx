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
      {errors && errors?.length > 0
        ? errors?.map((error, i) => (
            <Stack spacing={3} mb={4} key={i}>
              <Alert status="error">
                <AlertIcon />
                {error}
              </Alert>
            </Stack>
          ))
        : null}
      {children}
    </Box>
  );
};

Form.Input = FormInput;

export default Form;
