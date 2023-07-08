'use client';

import React, { ReactNode, useContext } from 'react';
import Image, { StaticImageData } from 'next/image';
import Logo from '../../assets/Logo/Gseller_Logo_HORIZONTAL_FUNDO BRANCO.png';
import { RegisterContext, RegisterSellerType } from '@contexts/steps';

interface ContainerRegisterProps {
    children?: ReactNode;
    src: StaticImageData;
}

export const ContainerRegister = ({
    children,
    src,
}: ContainerRegisterProps) => {
    return (
        <>
            <div className="z-50 w-full min-h-screen px-16 pt-5 pb-12 md:w-2/4 lg:w-1/3 bg-gray-50 dark:bg-gray-900 animationToRight">
                <Image src={Logo} width={250} height={250} alt="Logo Gseller" />
                {children}
            </div>
            <div className="fixed right-0 hidden md:flex md:w-2/4 lg:w-2/3 bg-[#2E3358] min-h-screen items-center justify-center flex-wrap mx-auto">
                <Image src={src} alt="" className="max-w-[90vh] " />
            </div>
        </>
    );
};
