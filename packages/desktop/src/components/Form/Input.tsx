import React, { useState } from 'react';
import {
  Input,
  InputProps,
  FormHelperText,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/core';

type FormProps = {
  id: string;
  label: string;
  required?: boolean;
  disabled?: boolean;
  validateValue?: (value: string) => string | void;
  inputHelperText?: {
    id: string;
    text: string;
  };
} & InputProps;

const FormInput: React.FC<FormProps> = ({
  inputHelperText,
  required,
  disabled,
  validateValue,
  label,
  id,
  ...props
}) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleOnBlur = () => {
    if (validateValue) {
      const hasError = validateValue(value);
      if (hasError) {
        setError(hasError);
      }
    }
  };

  return (
    <FormControl
      isInvalid={!!error}
      isRequired={required}
      isDisabled={disabled}
    >
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <Input
        aria-describedby={inputHelperText?.id}
        id={id}
        value={value}
        onBlur={handleOnBlur}
        {...props}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setError('');
          setValue(event.target.value);
        }}
      />
      {inputHelperText && (
        <FormHelperText>{inputHelperText.text}</FormHelperText>
      )}
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
};

export default FormInput;
