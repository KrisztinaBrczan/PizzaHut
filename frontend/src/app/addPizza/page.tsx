'use client';

import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormInputType } from '@/Types';
import FormInput from '@/components/FormInput';
import RadioButtons from '@/components/RadioButtons';

const inputFields: FormInputType[] = [
  { label: 'Name', inputName: 'name', placeholderText: "pizza's name" },
  { label: 'Image', inputName: 'photo_url', placeholderText: 'url' },
  { label: 'Price (in HUF)', inputName: 'price', placeholderText: 'HUF' },
];

const pizzaSizeFields: number[] = [28, 32, 52];

export default function page() {
  const methods = useForm({
    defaultValues: {
      name: '',
      photo_url: '',
      price: '',
      size: '28',
      diet: [],
      toppings: [],
    },
    mode: 'all',
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <>
      <FormProvider {...methods}>
        <Box component="form" noValidate onSubmit={methods.handleSubmit(onSubmit)}>
          <Typography variant="h5" align="center" sx={{ fontWeight: 'bold' }}>
            Add New Pizza
          </Typography>
          {inputFields.map((inputField) => (
            <FormInput key={inputField.inputName} input={inputField} />
          ))}

          <FormLabel id="pizza-sizes">Pizza size (cm):</FormLabel>
          {pizzaSizeFields.map((pizzaSize) => (
            <RadioButtons key={pizzaSize} pizzaSize={pizzaSize} name="size" />
          ))}
          <Button variant="contained" type="submit">
            Create Pizza
          </Button>
        </Box>
      </FormProvider>
    </>
  );
}
