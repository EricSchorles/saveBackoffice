import { Control, FieldValues, Path } from 'react-hook-form';

export type ControlerBase<T extends FieldValues = FieldValues> = {
    control: Control<T, any>;
    name: Path<T>;
};
