import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterView } from "./register.view";
import { RegisterFormFielsType } from "@/types/forms";

export const RegisterContainer = () => {

    const isLoading = false;


  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<RegisterFormFielsType>();

  const onSubmit: SubmitHandler<RegisterFormFielsType> = async (formData) => {
    console.log("formData", formData);
  };

  return (
    <>
      <RegisterView
        form={{
          errors,
          control,
          register,
          handleSubmit,
          onSubmit,
          isLoading,
        }}
      />
    </>
  );
};
