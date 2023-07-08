'use client';

import { ReactNode, createContext, useState } from 'react';

export type RegisterSellerType = {
    step: number;
    nextStep: () => void;
};

export const RegisterContext = createContext<RegisterSellerType>({} as RegisterSellerType);

interface Props {
    children: ReactNode;
}

export const RegisterSellerProvider: React.FC<Props> = ({ children }) => {
    const [step, setStep] = useState(1);

    const nextStep = () => {
        if (step < 4) {
            setStep((oldStep) => oldStep + 1);
        }
    };
    return (
        <RegisterContext.Provider
            value={{
                step,
                nextStep,
            }}
        >
            {children}
        </RegisterContext.Provider>
    );
};
