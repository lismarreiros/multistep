import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Controller, useFormContext } from "react-hook-form";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputAdornment from '@mui/material/InputAdornment';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Button } from "@mui/material";
import { styled } from '@mui/material/styles';
import { FormHelperText } from "@mui/material";

type FormInputProps = {
    name: string;
    label: string;
    type: 'text' | 'date' | 'value' | 'category' | 'image';
};


export const FormInput = ({ name, label, type }: FormInputProps) => {
    
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
      });
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
                            format="DD/MM/YYYY"
                            label={label}
                            {...field}
                            slotProps ={{
                                textField: {
                                    helperText: fieldState.error?.message,
                                }
                            }}
                        />
                        </LocalizationProvider>
                    )}
                    {type === "value" && (
                        <TextField
                            type="number"
                            label={label}
                            error={Boolean(fieldState.error)}
                            helperText={fieldState.error?.message}
                            defaultValue="disabled"
                            InputProps={{startAdornment: <InputAdornment position="start">R$</InputAdornment>,}}
                            {...field}
                        />
                    )}
                     {type === "category" && (
                       <FormControl error={Boolean(fieldState.error)} > 
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
                           <FormHelperText>{fieldState.error?.message}</FormHelperText>
                       </FormControl>
                    )}
                    {type === 'image' && (
                        <Button sx={{ width: 230, height: 50}} size="medium" component="label" variant="contained">
                            Upload File
                        <VisuallyHiddenInput type="file"/>
                        </Button>
                    )}
                </Box>
                );
             }}
        />
    );
};