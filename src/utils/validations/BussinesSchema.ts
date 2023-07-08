import * as yup from 'yup';

export const BussinesSchema = yup.object({
    cnpjOrCpf: yup.string().required('Campo obrigatório'),
    yourName: yup.string(),
    whatsapp: yup.string(),
    instagramProfile: yup.string(),
    facebookPage: yup.string(),
});

export type BussinesData = yup.InferType<typeof BussinesSchema>;
