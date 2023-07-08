"use client";

import { SubmitHandler, useForm } from "react-hook-form";

import { Button } from "@components/Buttons/Button";
import { Input } from "@components/Input";
import { SignInMutationVariables } from "@utils/generated/graphql";
import { clsx } from "clsx";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import Modal from "@components/Modal";
interface FormCustomer {
  active?: boolean
}
export const FormCustomer = ({ active }: FormCustomer) => {

  // const {
  //   handleSubmit,
  //   control,
  //   formState: { errors },
  // } = useForm<SignInMutationVariables>({
  //   resolver: yupResolver(loginSchema),
  //   defaultValues: {
  //     rememberMe: false,
  //   },
  // });

  const onSubmit: SubmitHandler<SignInMutationVariables> = async (formData) => {
    const { username, password, rememberMe } = formData;
  };

  return (
    <Modal >
      <form
        className="space-y-4 md:space-y-6"
        action="#"
      // onSubmit={handleSubmit(onSubmit)}
      >

      </form>
    </Modal>
  );
};
