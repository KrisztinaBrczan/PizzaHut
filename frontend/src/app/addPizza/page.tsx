'use client';

import { Box, Button, IconButton, FormLabel, Grid2, Typography } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { FormProvider, useFieldArray, useForm } from 'react-hook-form';
import { FormInputType } from '@/Types';
import FieldArrays from '@/components/FieldArrays';
import RadioButtons from '@/components/RadioButtons';
import FormInput from '@/components/FormInput';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const inputFields: FormInputType[] = [
  { label: 'Name', inputName: 'name', placeholderText: "pizza's name" },
  { label: 'Image', inputName: 'photo_url', placeholderText: 'url' },
  { label: 'Price', inputName: 'price', placeholderText: 'HUF' },
];

const pizzaSizeFields: string[] = ['28', '32', '52'];

const schema = z.object({
  name: z
    .string()
    .min(1, 'Field is required')
    .transform((value) => value.toLowerCase().charAt(0).toUpperCase() + value.slice(1).toLowerCase()),
  photo_url: z.string().min(1, 'Field is required'),
  price: z.string().min(1, 'Field is required'),
  size: z.string().min(1, 'Field is required'),

  diets: z
    .array(
      z.object({
        value: z
          .string()
          .min(1, 'Provde a diet')
          .transform((value) => value.toLowerCase().charAt(0).toUpperCase() + value.slice(1).toLocaleLowerCase()),
      }),
    )
    .refine((value) => value.length > 0, {
      message: 'Add a diet',
      path: ['diets'],
    }),

  toppings: z
    .array(
      z.object({
        value: z
          .string()
          .min(1, 'Provde a topping')
          .transform((value) => value.toLowerCase().charAt(0).toUpperCase() + value.slice(1).toLocaleLowerCase()),
      }),
    )
    .refine((value) => value.length > 0, {
      message: 'Add a diet',
      path: ['toppings'],
    }),
});

type PizzaFormType = z.infer<typeof schema>;

export default function Page() {
  const methods = useForm<PizzaFormType>({
    defaultValues: {
      name: '',
      photo_url: '',
      price: '',
      size: '28',
      diets: [{ value: '' }],
      toppings: [{ value: '' }],
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
    name: 'diets',
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

    const dataToFirebase = {
      name: data.name,
      size: Number(data.size),
      price: Number(data.price),
      diets: data.diets.map((item) => item.value),
      toppings: data.toppings.map((item) => item.value),
      photo_url: data.photo_url,
    };

    console.log('dataToFirebase', dataToFirebase);
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
            <RadioButtons key={pizzaSize} pizzaSize={Number(pizzaSize)} name="size" />
          ))}

          <Grid2 container alignItems="center" sx={{ mt: 2 }}>
            <FormLabel id="pizza-diet">Add diet:</FormLabel>
            <Typography sx={{ color: 'primary' }}>{methods.formState.errors?.diets?.message}</Typography>
            <IconButton onClick={() => appendDiet({ value: '' })}>
              <AddCircleIcon sx={{ color: 'primary.main' }} />
            </IconButton>
          </Grid2>

          {dietFields.map((currentItem, index) => (
            <Box key={currentItem.id} sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
              <FieldArrays name="diets" index={index} />
              <IconButton onClick={() => removeDiet(index)} color="error">
                <RemoveCircleOutlineIcon />
              </IconButton>
            </Box>
          ))}

          <Grid2 container alignItems="center" sx={{ mt: 2 }}>
            <FormLabel id="pizza-toppings">Add toppings:</FormLabel>
            <IconButton onClick={() => appendTopping({ value: '' })}>
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
