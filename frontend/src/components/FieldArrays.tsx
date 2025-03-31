import { Box, IconButton, TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

interface FieldArraysProps {
  name: 'diets' | 'toppings';
  index: number;
}

export default function FieldArrays({ name, index }: FieldArraysProps) {
  const { control, formState } = useFormContext();

  return (
    <>
      <Controller
        control={control}
        name={`${name}[${index}].value`}
        render={({ field }) => (
          <TextField
            {...field}
            defaultValue={field.value}
            size="small"
            placeholder={`${name} ${index + 1}`}
            error={!!formState.errors[name]}
            helperText={"Don't leave it empty"}
          />
        )}
      />
    </>
  );
}
