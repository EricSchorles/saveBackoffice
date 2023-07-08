import { FieldError } from 'react-hook-form';

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
    control: any;
    name: string;
    error?: FieldError | undefined;
    errorMessage?: string | undefined;
    label?: string | undefined;
    info?: string;
    password?: boolean;
    isOptional?: boolean;
}
