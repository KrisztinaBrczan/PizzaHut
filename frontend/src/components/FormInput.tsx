'use client';

import { FormInputType } from '@/Types';
import { FormControl, FormLabel, TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

interface FormInputProps {
  input: FormInputType;
}

export default function FormInput({ input }: FormInputProps) {
  const { control, formState } = useFormContext();

  const { label, inputName, placeholderText } = input;

  return (
    <Controller
      name={inputName}
      control={control}
      rules={{ required: 'Field cannot be empty' }}
      render={({ field }) => (
        <FormControl fullWidth>
          <FormLabel>{label}:</FormLabel>
          <TextField
            {...field}
            required
            size="small"
            placeholder={placeholderText}
            error={!!formState.errors[inputName]}
            helperText={formState.errors[inputName]?.message?.toString()}
          />
        </FormControl>
      )}
    />
  );
}
