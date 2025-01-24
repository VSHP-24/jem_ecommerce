import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import { useState } from "react";
import { useUser } from "../authentication/useUser";
import { useUpdateMyProfile } from "../authentication/useUpdateMe";
import Heading from "../../ui/Heading";

function MyProfileForm() {
  const [isUpdateSession, setIsUpdateSession] = useState(false);
  const { isPending, user } = useUser();
  const { isEditing, updateMyProfile } = useUpdateMyProfile();

  const isWorking = isPending || isEditing;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: user || {},
  });

  async function onSubmit(data) {
    // Initially input fields will be disabled , this enables the input field to edit
    if (!isUpdateSession) return setIsUpdateSession(true);

    if (isUpdateSession) {
      updateMyProfile({ ...data }, { onSuccess: setIsUpdateSession(false) });
    }
  }

  return (
    <div className="flex flex-col gap-8 justify-self-center">
      <Heading as="h4" styles="text-2xl tablet:text-3xl self-center">
        Profile Details
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormRow label="Name" error={errors?.name?.message}>
          <input
            type="text"
            id="name"
            disabled={isWorking || !isUpdateSession}
            placeholder="Enter Staff Full Name"
            {...register("name", { required: "*This field is required" })}
          />
        </FormRow>

        <FormRow label="Email address" error={errors?.email?.message}>
          <input
            type="email"
            id="email"
            placeholder="Enter Staff Email Address"
            autoComplete="username"
            disabled={isWorking || !isUpdateSession}
            {...register("email", { required: "*This field is required" })}
          />
        </FormRow>

        <FormRow>
          <Button variation="primary" size="large" disabled={isWorking}>
            {!isUpdateSession ? "Edit My Profile" : "Update My Profile"}
          </Button>
        </FormRow>
      </form>
    </div>
  );
}

export default MyProfileForm;
