import { useForm } from "react-hook-form";

import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";

import { useResetPassword } from "./useResetPassword";
import Spinner from "../../ui/Spinner";

function ResetPasswordForm() {
  const { resetPassword, isPending } = useResetPassword();

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
    resetPassword({ ...data }, { onSuccess: () => reset() });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Password" error={errors?.password?.message}>
        <input
          type="password"
          id="password"
          placeholder="Enter your New Password"
          autoComplete="current-password"
          disabled={isPending}
          {...register("password", {
            required: "*This field is required",
            minLength: {
              value: 8,
              message: "Password should contain atleast 8 characters",
            },
          })}
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

      <FormRow>
        <Button
          variation="primary"
          size="large"
          disabled={isPending}
          additionalStyles="px-4"
          onDisabled={isPending}
        >
          {!isPending ? "Reset Password" : <Spinner />}
        </Button>
      </FormRow>
    </form>
  );
}

export default ResetPasswordForm;
