import React from 'react';
import { BoxProps, Stack, Alert, AlertIcon, Box } from '@chakra-ui/core';

import FormInput from './Input';

type FormProps = {
  errors?: string[];
  successMessage?: (() => JSX.Element) | string;
} & BoxProps;

const Form: React.FC<FormProps> & { Input: typeof FormInput } = ({
  errors,
  children,
  successMessage: SuccessMessage,
  ...props
}) => {
  return (
    <Box as="form" {...props}>
      <Stack spacing={3} mb={4}>
        {SuccessMessage && (
          <Alert status="success" mb={4}>
            {typeof SuccessMessage === 'string' ? (
              SuccessMessage
            ) : (
              <SuccessMessage />
            )}
          </Alert>
        )}
        {errors && errors?.length > 0
          ? errors?.map((error, i) => (
              <Alert mb={4} status="error" key={i}>
                <AlertIcon />
                {error}
              </Alert>
            ))
          : null}
      </Stack>
      {children}
    </Box>
  );
};

Form.Input = FormInput;

export default Form;
