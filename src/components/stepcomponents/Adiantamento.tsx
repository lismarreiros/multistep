import Box from "@mui/material/Box";
import { FormInput } from "../FormInput";

export const Adiantamento = () => {
    return (
        <Box marginY={10}>
            <Box display="flex" flexDirection="column" gap={2} marginTop={3}>
                <FormInput type="date" name="dataAdia" label="Data" />
                <FormInput type="value" name="valorAdia" label="Valor"/>
            </Box>
        </Box>
    );
};