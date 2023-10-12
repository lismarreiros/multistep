import Box from "@mui/material/Box";
import { Controller, useFormContext } from "react-hook-form";


type DatePickerProps = {
    name: string;
    label: string;
};

export const DatePicker = ({ name, label }: DatePickerProps) => {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) =>  {
                return (
                <Box display="flex" flexDirection="column">
                    <DatePicker
                    label={label}
                    {...field}
                    />

                </Box>
                );
             }}
        />
    );
};