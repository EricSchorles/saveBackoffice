'use client';

import {
    BussinesData,
    BussinesSchema,
} from '@utils/validations/BussinesSchema';

import { Button } from '@components/Buttons/Button';
import { ContainerRegister } from '@components/ContainerRegister';
import { Input } from '@components/Input';
import React from 'react';
import RegisterBg from '@assets/register-bg.webp';
import { useForm } from 'react-hook-form';
import useSteps from '@hooks/useSteps';
import { yupResolver } from '@hookform/resolvers/yup';

export const StepThreeBussinesData = () => {

    const { nextStep, step } = useSteps()
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<BussinesData>({
        resolver: yupResolver(BussinesSchema),
        defaultValues: {
            cnpjOrCpf: '',
            yourName: '',
            whatsapp: '',
            instagramProfile: '',
            facebookPage: '',
        },
    });

    const handleInsertBussinesData = () => {
        nextStep();
    };

    if (step === 3)
        return (
            <ContainerRegister src={RegisterBg}>
                <form
                    onSubmit={handleSubmit(handleInsertBussinesData)}
                    action=""
                >
                    <div className="mt-5">
                        <Input
                            control={control}
                            error={errors.cnpjOrCpf}
                            name="cnpjOrCpf"
                            label="CNPJ ou CPF"
                            placeholder=""
                        />
                    </div>
                    <div className="mt-5">
                        <Input
                            control={control}
                            error={errors.yourName}
                            name="yourName"
                            label="Seu nome"
                            placeholder=""
                            isOptional
                        />
                    </div>
                    <div className="mt-5">
                        <Input
                            control={control}
                            error={errors.whatsapp}
                            name="whatsapp"
                            label="WhatsApp (com DDD)"
                            placeholder=""
                            isOptional
                        />
                    </div>
                    <div className="mt-5">
                        <Input
                            control={control}
                            error={errors.instagramProfile}
                            name="instagramProfile"
                            label="Perfil do Instagram"
                            placeholder=""
                            isOptional
                        />
                    </div>
                    <div className="mt-5">
                        <Input
                            control={control}
                            error={errors.facebookPage}
                            name="facebookPage"
                            label="Página do Facebook"
                            placeholder=""
                            isOptional
                        />
                    </div>
                    <Button
                        className="mt-4 w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 cursor-pointer"
                        text="Acessar Minha Gseller!"
                        type="button"
                    />
                </form>
            </ContainerRegister>
        );
    else return null;
};
