
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box"
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Controller, useFormContext } from "react-hook-form";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputAdornment from '@mui/material/InputAdornment';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

type FormInputProps = {
    name: string;
    label: string;
    type: 'text' | 'date' | 'value' | 'category';
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
                        {...field}
                        />
                        </LocalizationProvider>
                    )}
                    {type === "value" && (
                        <TextField
                        type="number"
                        label={label}
                        InputProps={{startAdornment: <InputAdornment position="start">R$</InputAdornment>,}}
                        {...field}
                        />
                    )}
                     {type === "category" && (
                       <FormControl> 
                           <RadioGroup
                           {...field}
                           row
                           aria-labelledby="demo-row-radio-buttons-group-label"
                           name="row-radio-buttons-group"
                           >
                           <FormControlLabel value="avião" control={<Radio />} label="Avião" />
                           <FormControlLabel value="ônibus" control={<Radio />} label="Ônibus" />
                           <FormControlLabel value="carro" control={<Radio />} label="Carro" />

                           </RadioGroup>
                       </FormControl>
                    )}
                </Box>
                );
             }}
        />
    );
};