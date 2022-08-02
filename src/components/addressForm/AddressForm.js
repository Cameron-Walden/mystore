import { Typography, Grid } from "@mui/material";
import { useForm, FormProvider } from 'react-hook-form';
import TextFieldComponent from "../textFieldComponent/TextFieldComponent";

export default function AddressForm(){
    const methods = useForm();
    return(
        <>
        <Typography variant="h6" gutterBottom>Shipping Address</Typography>
        <FormProvider {...methods}>
            <form>
                <Grid container spacing={3}>
                    <TextFieldComponent required name='firstName' label='First name'/>
                </Grid>
            </form>
        </FormProvider>
        </>
    )
}