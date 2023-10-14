import Box from "@mui/material/Box";
import { FormInput } from "../FormInput";

export const Hospedagem = () => {
    return (
        <Box marginY={10}>
            <Box display="flex" flexDirection="column" gap={2} marginTop={3}>
                <FormInput type="text" name="nomeHotel" label="Nome do Hotel" />
                <FormInput type="value" name="valorHotel" label="Valor"/>
            </Box>
        </Box>
    );
};