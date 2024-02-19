import { FormsType } from "@/types/forms";

interface Props {
  form: FormsType;
}

export const RegisterForm = ({ form }: Props) => {
  const { control, onSubmit, errors, isLoading, register, handleSubmit } = form;

  console.log("form", form);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input defaultValue="test" {...register("example")} />

        {/* include validation with required or other standard HTML validation rules */}
        <input placeholder="test 2 "{...register("exampleRequired", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </>
  );
};
