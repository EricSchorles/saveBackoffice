import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export const CardContent = ({ children }: Props) => {
    return <div className="flex flex-wrap justify-start gap-4">{children}</div>;
};
