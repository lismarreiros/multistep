import Box from '@mui/material/Box';
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import * as z from "zod";
import { Destino } from "./stepcomponents/Destino";
import { Transporte } from "./stepcomponents/Transporte";
import { Hospedagem } from "./stepcomponents/Hospedagem";
import { Adiantamento } from "./stepcomponents/Adiantamento";
import { Steps } from "./Stepper";
import { useState } from 'react';

const schema = z.object({
    cidade: z.string()
    .min(1),
    dataIda: z.coerce.date(),
    dataVolta: z.coerce.date(),

    category: z.string(),
    valorTrans: z.coerce.number().min(1),


    nomeHotel: z.string().min(1),
    valorHotel: z.coerce.number(),

    valorAdia: z.coerce.number(),
    dataAdia: z.coerce.date(),
}).required();

type FormValues =  z.infer<typeof schema>;

const sourceSteps = [
    {
        label: "Destino",
        fields: ["cidade", "dataIda", "dataVolta"],
        Component: <Destino />,
        hasError: false,
    },
    {
        label: "Transporte",
        fields: ["valorTrans", "category"],
        Component: <Transporte />,
        hasError: false,
    },
    {
        label: "Hospedagem",
        fields: ["nomeHotel", "valorHotel"],
        Component: <Hospedagem />,
        hasError: false,
    },
    {
        label:"Adiantamento",
        fields: ["valorAdia", "dataAdia"],
        Component: <Adiantamento />,
        hasError: false,
    },
];

const getSteps = (errors: string[]) => {
    return sourceSteps.map((step) => {
        return {
            ...step,
            hasError: errors.some((error) => step.fields.includes(error)),
        };
    });
};

export function Form() {
    const [output, setOutput] = useState('')
    const methods = useForm<FormValues>({
        resolver: zodResolver(schema),
        criteriaMode: "all",
        mode: "all",
        defaultValues: {
            cidade: "",
            dataIda: undefined,
            dataVolta: undefined,
            category: undefined,
            valorTrans: 0,
            nomeHotel: "",
            valorHotel: 0,
            valorAdia: 0,
            dataAdia: undefined,
        },
    });

    if (methods.formState.isSubmitSuccessful) {
        return (
            <Box>
                <Typography variant="h2">Formulário enviado com sucesso!</Typography>
                <Button onClick={() => methods.reset()}>
                    Clique aqui para enviar um novo cadastro
                </Button>
            </Box>
        );
    }

    const steps = getSteps(Object.keys(methods.formState.errors));

    function createUser(data:any) {
        setOutput(JSON.stringify(data, null, 2))
    }


    return( 
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(createUser)}>
                <Steps items={steps} />
            </form>
            <pre>{output}</pre>
        </FormProvider>
    );
}