'use client';

import { Box, Button, IconButton, FormLabel, Grid2, Typography } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Controller, FormProvider, useFieldArray, useForm } from 'react-hook-form';
import { FormInputType } from '@/Types';
import FieldArrays from '@/components/FieldArrays';
import RadioButtons from '@/components/RadioButtons';
import FormInput from '@/components/FormInput';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const inputFields: FormInputType[] = [
  { label: 'Name', inputName: 'name', placeholderText: "pizza's name" },
  { label: 'Image', inputName: 'photo_url', placeholderText: 'url' },
  { label: 'Price (in HUF)', inputName: 'price', placeholderText: 'HUF' },
];

const pizzaSizeFields: number[] = [28, 32, 52];

const schema = z.object({
  name: z.string().transform((value) => value.toLowerCase().charAt(0).toUpperCase() + value.slice(1).toLowerCase()),
  photo_url: z.string(),
  price: z.string().transform((value: string) => Number(value)),
  size: z.string().transform((value: string) => Number(value)),
  diet: z.array(
    z
      .string()
      .min(1, 'Provide a diet')
      .transform((value) => value.toLowerCase().charAt(0).toUpperCase() + value.slice(1).toLowerCase()),
  ),
  toppings: z.array(
    z
      .string()
      .min(1, 'Provide a topping')
      .transform((value) => value.toLowerCase().charAt(0).toUpperCase() + value.slice(1).toLowerCase()),
  ),
});

type PizzaFormType = z.infer<typeof schema>;

export default function Page() {
  const methods = useForm<PizzaFormType>({
    defaultValues: {
      name: '',
      photo_url: '',
      price: 0,
      size: 28,
      diet: [],
      toppings: [],
    },
    mode: 'all',
    resolver: zodResolver(schema),
  });

  const {
    fields: dietFields,
    append: appendDiet,
    remove: removeDiet,
  } = useFieldArray({
    control: methods.control,
    name: 'diet',
  });

  const {
    fields: toppingFields,
    append: appendTopping,
    remove: removeTopping,
  } = useFieldArray({
    control: methods.control,
    name: 'toppings',
  });

  function onSubmit(data: PizzaFormType) {
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

          <Grid2 container alignItems="center" sx={{ mt: 2 }}>
            <FormLabel id="pizza-diet">Add diet:</FormLabel>
            <IconButton onClick={() => appendDiet('')}>
              <AddCircleIcon sx={{ color: 'primary.main' }} />
            </IconButton>
          </Grid2>

          {dietFields.map((currentItem, index) => (
            <Box key={currentItem.id} sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
              <FieldArrays name="diet" index={index} />
              <IconButton onClick={() => removeDiet(index)} color="error">
                <RemoveCircleOutlineIcon />
              </IconButton>
            </Box>
          ))}

          <Grid2 container alignItems="center" sx={{ mt: 2 }}>
            <FormLabel id="pizza-toppings">Add toppings:</FormLabel>
            <IconButton onClick={() => appendTopping('')}>
              <AddCircleIcon sx={{ color: 'primary.main' }} />
            </IconButton>
          </Grid2>

          {toppingFields.map((currentItem, index) => (
            <Box key={currentItem.id} sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
              <FieldArrays name="toppings" index={index} />
              <IconButton onClick={() => removeTopping(index)} color="error">
                <RemoveCircleOutlineIcon />
              </IconButton>
            </Box>
          ))}

          <Button variant="contained" type="submit" sx={{ mt: '50px' }}>
            Create Pizza
          </Button>
        </Box>
      </FormProvider>
    </>
  );
}
