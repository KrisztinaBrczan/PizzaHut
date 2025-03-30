'use client';

import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

interface RadioButtonProps {
  pizzaSize: number;
  name: string;
}

export default function RadioButtons({ pizzaSize, name }: RadioButtonProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControl fullWidth>
          <RadioGroup
            aria-labelledby="pizza-sizes"
            defaultValue={field.value}
            value={field.value}
            onChange={(e) => field.onChange(e.target.value)}
            name="radio-buttons-group"
          >
            <FormControlLabel key={pizzaSize} value={pizzaSize} control={<Radio />} label={pizzaSize} />
          </RadioGroup>
        </FormControl>
      )}
    />
  );
}
