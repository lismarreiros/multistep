import Box from "@mui/material/Box";
import { FormInput } from "../FormInput";

export const Transporte = () => {
    return (
        <Box marginY={10}>
            <Box display="flex" flexDirection="column" gap={4} marginTop={3}>
                <FormInput type="category" name="category" label="Tipo" />
                <FormInput type="value" name="valorTrans" label="Valor"/>
                <FormInput type="image" name="imageTrans" label="Anexo"/>
            </Box>
        </Box>
    );
};