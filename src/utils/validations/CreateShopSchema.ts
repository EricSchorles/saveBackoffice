import * as yup from 'yup';

export const CreateShopSchema = yup.object({
    brandName: yup.string().required('Campo obrigatório'),
    email: yup.string().required('Campo obrigatório'),
    password: yup.string().required('Campo obrigatório'),
    acceptTerms: yup.boolean().oneOf([true], 'Campo obrigatório'),
});

export type CreateSchemaData = yup.InferType<typeof CreateShopSchema>;
