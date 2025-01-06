import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";

import { useCreateNewUser } from "./useCreateNewUser";

function CreateNewUserForm() {
  const { createNewUser, isPending } = useCreateNewUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm({
    defaultValues: {},
  });

  async function onSubmit(data) {
    createNewUser({ ...data }, { onSuccess: () => reset() });
  }

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Name" error={errors?.name?.message}>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          autoComplete="name"
          disabled={isPending}
          {...register("name", { required: "*This field is required" })}
        />
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          autoComplete="username"
          disabled={isPending}
          {...register("email", { required: "*This field is required" })}
        />
      </FormRow>

      <FormRow label="Password" error={errors?.password?.message}>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          autoComplete="current-password"
          disabled={isPending}
          {...register("password", { required: "*This field is required" })}
        />
      </FormRow>

      <FormRow
        label="Confirm  Password"
        error={errors?.passwordConfirm?.message}
      >
        <input
          type="password"
          id="passwordConfirm"
          placeholder="Enter your Password to confirm"
          disabled={isPending}
          {...register("passwordConfirm", {
            required: "*This field is required",
            validate: (value) =>
              String(value) === String(getValues().password) ||
              "*Passwords do not match",
          })}
        />
      </FormRow>

      <NavLink
        className="text-sm font-semibold text-blue-800 hover:font-bold hover:underline focus:underline active:underline"
        to="/login"
      >
        Already have an account ?
      </NavLink>

      <FormRow>
        <Button variation="primary">Create Account</Button>
      </FormRow>
    </form>
  );
}

export default CreateNewUserForm;
