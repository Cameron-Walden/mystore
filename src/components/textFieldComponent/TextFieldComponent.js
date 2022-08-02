import { TextField, Grid } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";
//https://react-hook-form.com/api/useformcontext/#main

export default function TextFieldComponent({ name, label, required }) {
  const { control } = useFormContext();

  <Grid item xs={12} sm={6}>
    <Controller
      as={TextField}
      control={control}
      fullWidth
      name={name}
      label={label}
      required={required}
    />
  </Grid>
}
