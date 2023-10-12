
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box"
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Controller, useFormContext } from "react-hook-form";
import { DatePicker} from '@mui/x-date-pickers/DatePicker';
import InputAdornment from '@mui/material/InputAdornment';



type FormInputProps = {
    name: string;
    label: string;
    type: 'text' | 'date' | 'value';
};


export const FormInput = ({ name, label, type }: FormInputProps) => {
    const { control } = useFormContext();
    

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState }) =>  {
                return (
                <Box display="flex" flexDirection="column">
                    {type === "text" && ( 
                        <TextField
                            label={label}
                            error={Boolean(fieldState.error)}
                            helperText={fieldState.error?.message}
                            {...field}
                        />
                    )}
                    {type === "date" && (
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                        label={label}
                        />
                        </LocalizationProvider>
                    )}
                    {type === "value" && (
                        <TextField
                        label={label}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                          }}
                        />
                    )}
                </Box>
                );
             }}
        />
    );
};