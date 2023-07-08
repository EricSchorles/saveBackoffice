'use client';

import {
    CreateSchemaData,
    CreateShopSchema,
} from '@utils/validations/CreateShopSchema';
import React, { useCallback, useEffect } from 'react';
import { gql, useLazyQuery } from '@apollo/client';

import { Button } from '@components/Buttons/Button';
import { CheckShopNameAvailabilityDocument } from '@utils/generated/graphql';
import { Checkbox } from '@components/Checkbox';
import { ContainerRegister } from '@components/ContainerRegister';
import { Input } from '@components/Input';
import Link from 'next/link';
import RegisterBg from '@assets/register-bg.webp';
import { useForm } from 'react-hook-form';
import useSteps from '@hooks/useSteps';
import { yupResolver } from '@hookform/resolvers/yup';

const CHECK_SHOP_NAME = gql`
    ${CheckShopNameAvailabilityDocument}
`;

export const RegisterStepOne = () => {
    const { nextStep, step } = useSteps()
    const {
        handleSubmit,
        control,
        formState: { errors },
        watch,
    } = useForm<CreateSchemaData>({
        resolver: yupResolver(CreateShopSchema),
        defaultValues: {
            brandName: 'teste',
            email: 'mateus@gmail.com',
            password: '123456789',
            acceptTerms: false,
        },
    });

    const shopName = watch('brandName');
    const [checkName, { data: responseCheckName }] =
        useLazyQuery(CHECK_SHOP_NAME);

    const getResultCheckName = useCallback(async () => {
        const response = await checkName({
            variables: {
                shopName,
            },
        });
        return response;
    }, [checkName, shopName]);

    useEffect(() => {
        if (shopName.length >= 3) getResultCheckName();
    }, [getResultCheckName, shopName]);

    const handleCreateBrand = () => {
        nextStep();
    };

    if (step === 1)
        return (
            <ContainerRegister src={RegisterBg}>
                <h1 className="mt-4 text-3xl font-medium leading-relaxed tracking-wide text-gray-900 dark:text-white">
                    Crie sua loja virtual <br /> e comece sua jornada
                </h1>
                <form
                    onSubmit={handleSubmit(handleCreateBrand)}
                    className="mt-5"
                >
                    <div>
                        <Input
                            control={control}
                            error={errors.brandName}
                            errorMessage={
                                responseCheckName &&
                                    !responseCheckName?.checkShopNameAvailability
                                    ? 'Nome indisponível'
                                    : ''
                            }
                            type="text"
                            name="brandName"
                            label="Nome da sua marca"
                            info="Você poderá alterá-lo mais tarde"
                            placeholder="Escreva o nome da sua marca"
                        />
                    </div>
                    <div className="mt-5">
                        <Input
                            control={control}
                            error={errors.email}
                            type="email"
                            name="email"
                            label="E-mail"
                            placeholder="Escreva o e-mail que mais usa"
                        />
                    </div>
                    <div className="mt-5">
                        <Input
                            control={control}
                            error={errors.password}
                            name="password"
                            password
                            label="Senha"
                            placeholder="Defina a sua senha"
                        />
                    </div>
                    <div className="flex items-center mt-6">
                        <Checkbox
                            label="Aceite os Termos e Condições e a Política de Privacidade da Gseller"
                            control={control}
                            name="acceptTerms"
                            describedby="terms"
                            error={errors.acceptTerms}
                        />
                    </div>
                    <Button
                        className="mt-4 w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 cursor-pointer"
                        text="Criar Loja"
                        type="submit"
                    />

                    <h2 className="mt-4 text-center text-gray-500 dark:text-gray-300">
                        Você já tem uma Gseller?{' '}
                        <Link href="/login" className="text-primary">
                            Acesse.
                        </Link>{' '}
                    </h2>
                </form>
            </ContainerRegister>
        );
    return null;
};
