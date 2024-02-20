import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterView } from "./register.view";
import { RegisterFormFielsType } from "@/types/forms";
import { firebaseCreateUser } from "@/api/authentication";
import { toast } from 'react-toastify';
import { useToggle } from "@/hooks/use-toggle";


export const RegisterContainer = () => {
const { value: isLoading , setValue: setIsLoading, toggle} = useToggle({initial: true});


  const {
    handleSubmit,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<RegisterFormFielsType>();

  const handleCreateUserAuthentication = async ({
    email,
    password,
    how_did_hear,
  }: RegisterFormFielsType) => {
    const { error, data } = await firebaseCreateUser(email, password);
    if (error) {
      setIsLoading(false);
      toast.error(error.message)
      return;
    }
//*@ todo create user document
    toast.success("Bienvenue sur l'app des singes codeurs")
    setIsLoading(false);
    reset();
  };

  const onSubmit: SubmitHandler<RegisterFormFielsType> = async (formData) => {
    setIsLoading(true);
    console.log("formData", formData);

    const { password } = formData;

    if (password.length <= 5) {
      setError("password", {
        type: "manual",
        message: "Ton mot de passe doit comporter au minimum 6 caractères",
      });
      return;
    }
    handleCreateUserAuthentication(formData);
  };

  return (  

<RegisterView 
form={{
  errors,
  register,
  handleSubmit,
  onSubmit,
  isLoading,
}}
/>
  );
};
