import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Controller, FieldValues } from 'react-hook-form';

import { ControlerBase } from '@utils/types/controllerbase.type';
import { InputProps } from '@utils/types/input.type';
import clsx from 'clsx';
import { useState } from 'react';

export const Input = <T extends FieldValues = any>({
  control,
  name,
  error,
  label,
  info,
  password = false,
  type,
  errorMessage,
  isOptional,
  onChange,
  ...rest
}: ControlerBase<T> & InputProps) => {
  const [isPassword, setIsPassword] = useState(password);

  return (
    <>
      <div className="flex items-center gap-1 mb-2">
        <label
          htmlFor={name}
          className="flex text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
        {isOptional && (
          <label className="text-xs text-black-50 dark:text-black-10">
            (Opcional)
          </label>
        )}
      </div>

      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <div className="relative">
            <input
              className={clsx(
                error &&
                'border border-red-500 dark:border-red-400 focus:ring-red-500 dark:focus:ring-red-400  focus:border-red-500 dark:focus:border-red-400',
                'bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 min-w-[150px] flex items-center',
              )}
              type={isPassword ? 'password' : type || 'text'}
              {...field}
              {...rest}
            />
            {password && (
              <div
                className="absolute right-0 mr-4 cursor-pointer bottom-2"
                onClick={() => {
                  setIsPassword(!isPassword);
                }}
              >
                {isPassword ? (
                  <AiOutlineEyeInvisible
                    size={25}
                    className="text-gray-900 dark:text-black-30"
                  />
                ) : (
                  <AiOutlineEye
                    size={25}
                    className="text-gray-900 dark:text-black-30"
                  />
                )}
              </div>
            )}
          </div>
        )}
      />
      {error && !errorMessage && (
        <span className="block mt-2 mb-3 text-sm font-medium text-rose-700">
          {error.message}
        </span>
      )}
      {errorMessage && (
        <span className="block mt-2 mb-3 text-sm font-medium text-rose-700">
          {errorMessage}
        </span>
      )}
      {!error && !errorMessage && (
        <span className="block mt-2 text-xs font-medium text-black-60 dark:text-black-10">
          {info}
        </span>
      )}
    </>
  );
};
