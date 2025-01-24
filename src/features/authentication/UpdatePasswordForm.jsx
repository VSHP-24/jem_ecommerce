import { useForm } from "react-hook-form";
import { useUpdatePassword } from "./useUpdatePassword";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import Heading from "../../ui/Heading";

function UpdatePasswordForm() {
  const { updatePassword, isPending } = useUpdatePassword();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm();

  async function onSubmit(data) {
    updatePassword({ ...data }, { onSuccess: () => reset() });
  }

  return (
    <div className="flex flex-col gap-8 justify-self-center">
      <Heading as="h4" styles="text-2xl tablet:text-3xl self-center">
        Update Password
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormRow
          label="Current Password"
          error={errors?.passwordCurrent?.message}
        >
          <input
            type="password"
            id="passwordCurrent"
            disabled={isPending}
            placeholder="Enter Current Password"
            {...register("passwordCurrent", {
              required: "*This field is required",
            })}
          />
        </FormRow>

        <FormRow label="New Password" error={errors?.password?.message}>
          <input
            type="password"
            id="password"
            disabled={isPending}
            placeholder="Enter New Password"
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
          label="Confirm New Password"
          error={errors?.passwordConfirm?.message}
        >
          <input
            type="password"
            id="passwordConfirm"
            disabled={isPending}
            placeholder="Enter Password to confirm"
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
          >
            Update Password
          </Button>
        </FormRow>
      </form>
    </div>
  );
}

export default UpdatePasswordForm;
