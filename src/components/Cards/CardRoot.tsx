import { ReactNode } from 'react';

interface CardRootProps {
    children: ReactNode;
    background?: string;
}
export const CardRoot = ({ background = 'white', children }: CardRootProps) => {
    return (
        <div className={` bg-${background} rounded-lg p-4 w-full dark:bg-primary`}>
            <div className="flex flex-col justify-between h-36">{children}</div>
        </div>
    );
};
