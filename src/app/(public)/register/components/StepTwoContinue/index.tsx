'use client';

import { Button } from '@components/Buttons/Button';
import { ContainerRegister } from '@components/ContainerRegister';
import React from 'react';
import RegisterBg from '@assets/register-bg.webp';
import useSteps from '@hooks/useSteps';

export const StepTwoContinue = () => {

    const { nextStep, step } = useSteps()

    if (step === 2) {
        return (
            <ContainerRegister src={RegisterBg}>
                <h1 className="mt-4 text-3xl font-medium leading-relaxed tracking-wide text-gray-900 dark:text-white ">
                    Você já deu o <br /> primeiro passo rumo ao sucesso.
                </h1>
                <p className="mt-5 text-base leading-relaxed text-black-60 dark:text-white">
                    Agora precisamos de alguns dados do seu negócio{' '}
                    <strong className="text-black dark:text-black">
                        para te ajudar da melhor maneira
                    </strong>
                </p>
                <Button
                    onClick={() => nextStep()}
                    className="mt-4 w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 cursor-pointer"
                    text="Continuar"
                    type="button"
                />
            </ContainerRegister>
        );
    }

    return null;
};
