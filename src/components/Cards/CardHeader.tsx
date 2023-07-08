import { ReactNode } from 'react';

interface Props {
    iconLeft?: ReactNode;
    right?: ReactNode;
    type?: 'primary' | 'default';
}
export const CardHeader = ({ iconLeft, right, type = 'default' }: Props) => {
    return (
        <div className="flex justify-between pr-2">
            <div
                className={`${
                    type === 'default'
                        ? 'bg-secondary'
                        : 'bg-[#ffffff3b] text-white'
                } rounded-lg  p-3`}
            >
                {iconLeft}
            </div>
            <div className="text-white">{right}</div>
        </div>
    );
};
