import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import Spinner from "../../ui/Spinner";

import { useLogin } from "./useLogin";

function LoginForm() {
  const { login, isPending } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: { email: "goku@jem.com", password: "custpass@123" },
  });

  async function onSubmit(data) {
    login({ ...data }, { onSuccess: () => reset() });
  }

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
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

      <NavLink
        className="text-base font-semibold text-blue-800 hover:font-bold hover:underline focus:underline active:underline"
        to="/forgot-password"
      >
        Forgot Password ?
      </NavLink>

      <NavLink
        className="text-base font-semibold text-blue-800 hover:font-bold hover:underline focus:underline active:underline"
        to="/new-customer"
      >
        New Customer ?
      </NavLink>

      <FormRow>
        <Button
          onDisabled={isPending}
          variation="primary"
          additionalStyles="px-4 "
        >
          {!isPending ? "Login" : <Spinner />}
        </Button>
      </FormRow>
    </form>
  );
}

export default LoginForm;
