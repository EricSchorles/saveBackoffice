import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface MenuButonProps {
    showText?: boolean;
    buttons: ButtonProps[];
}

export interface ButtonProps
    extends DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    text?: ReactNode;
    Icon?: any;
    typeStyle?: 'primary' | 'secondary' | 'edit' | 'delete' | 'create' | 'save';
}

export interface MenuButtonProps
    extends DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    outlined?: boolean;
}

export interface ButtonProps {
    className?: string;
    onClick?: () => void;
    children?: React.ReactNode;
}
