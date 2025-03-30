import { Box, IconButton, TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

interface FieldArraysProps {
  name: string;
  index: number;
}

export default function FieldArrays({ name, index }: FieldArraysProps) {
  const { control } = useFormContext();

  return (
    <>
      <Controller
        control={control}
        name={`${name}[${index}]`}
        render={({ field }) => <TextField {...field} size="small" placeholder={`${name} ${index + 1}`} />}
      />
    </>
  );
}
