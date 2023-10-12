import Box from "@mui/material/Box";
import { FormInput } from "../FormInput";

export const Transporte = () => {
    return (
        <Box marginY={10}>
            <Box display="flex" flexDirection="column" gap={3} marginTop={3}>
                <FormInput type="category" name="category" label="Tipo" />
                <FormInput type="value" name="valorTrans" label="Valor"/>
            </Box>
        </Box>
    );
};