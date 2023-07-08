import { FieldError } from 'react-hook-form';

export interface CheckboxProps
    extends React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    control: any;
    name: string;
    error?: FieldError | undefined;
    label?: string | undefined;
    info?: string;
    password?: boolean;
    describedby?: string;
}
