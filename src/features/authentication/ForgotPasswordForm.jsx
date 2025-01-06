import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import { useForgotPassword } from "./useForgotPassword";

function ForgotPasswordForm() {
  const { forgotPassword, isPending } = useForgotPassword();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {},
  });

  async function onSubmit(data) {
    forgotPassword({ ...data }, { onSuccess: () => reset() });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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

      <FormRow>
        <Button variation="primary">Send Password Reset Link</Button>
      </FormRow>
    </form>
  );
}

export default ForgotPasswordForm;
