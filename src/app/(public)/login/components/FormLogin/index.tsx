"use client";

import { SubmitHandler, useForm } from "react-hook-form";

import { Button } from "@components/Buttons/Button";
import { Input } from "@components/Input";
import { SignInMutationVariables } from "@utils/generated/graphql";
import { clsx } from "clsx";
import { loginSchema } from "./schemas/loginSchema";
import { signIn } from "../../services/signIn";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";

export const FormLogin = () => {
  const router = useRouter();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignInMutationVariables>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      rememberMe: false,
    },
  });

  const onSubmit: SubmitHandler<SignInMutationVariables> = async (formData) => {
    const { username, password, rememberMe } = formData;

    const result = await signIn({ username, password, rememberMe });

    if (result?.status) {
      toast.success(result.message);
      router.push("/");
      // return;
    } else {
      toast.error(result.message);
    }
  };

  return (
    <form
      className="space-y-4 md:space-y-6"
      action="#"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <Input
          type="email"
          name="username"
          control={control}
          error={errors.username}
          className={clsx(
            errors.username &&
            "border border-red-500 dark:border-red-400 focus:ring-red-500 dark:focus:ring-red-400  focus:border-red-500 dark:focus:border-red-400",
            "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          )}
          placeholder="name@company.com"
        />
      </div>
      <div>
        <Input
          type="password"
          name="password"
          control={control}
          error={errors.password}
          id="password"
          placeholder="••••••••"
          className={clsx(
            errors.password &&
            "border border-red-500 dark:border-red-400 focus:ring-red-500 dark:focus:ring-red-400  focus:border-red-500 dark:focus:border-red-400",
            "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          )}
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="remember"
              aria-describedby="remember"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
            />
          </div>
          <div className="ml-3 text-sm">
            <label
              htmlFor="remember"
              className="text-gray-500 dark:text-gray-300"
            >
              Remember me
            </label>
          </div>
        </div>
        <a
          href="#"
          className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:underline"
        >
          Forgot password?
        </a>
      </div>
      <Button
        className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 cursor-pointer"
        text="Sign in"
        type="submit"
        disabled={true}
      >
        Sign in
      </Button>
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Don’t have an account yet?{" "}
        <a
          href="#"
          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          Sign up
        </a>
      </p>
    </form>
  );
};
