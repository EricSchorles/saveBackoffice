import { Controller, FieldValues } from 'react-hook-form';
import { InputProps } from '@utils/types/input.type';
import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import clsx from 'clsx';
import { ControlerBase } from '@utils/types/controllerbase.type';
import { CheckboxProps } from '@utils/types/checkbox.type';

export const Checkbox = <T extends FieldValues = any>({
    control,
    name,
    error,
    label,
    info,
    password,
    type,
    describedby,
    ...rest
}: ControlerBase<T> & CheckboxProps) => {
    return (
        <>
            <Controller
                control={control}
                name={name}
                render={({ field }) => (
                    <label
                        className={clsx(
                            error && 'text-red-500',
                            'flex items-center gap-2 text-xs text-gray-500 dark:text-gray-300',
                        )}
                    >
                        <input
                            aria-describedby={describedby}
                            className={clsx(
                                error &&
                                    'border border-red-500 dark:border-red-400',
                                'w-5 h-5 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800',
                            )}
                            type="checkbox"
                            {...field}
                            {...rest}
                        />
                        {label}
                    </label>
                )}
            />
        </>
    );
};
