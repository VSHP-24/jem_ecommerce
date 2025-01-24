import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import Heading from "../../ui/Heading";
import toast from "react-hot-toast";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {},
  });

  async function onSubmit(data) {
    toast.success("Thank you for sending us a message ! 😁");
    reset();
  }
  return (
    <div className="flex flex-col items-center justify-items-center gap-8">
      <Heading as="h4">Drop us a message</Heading>

      <form
        className="grid grid-cols-1 content-between items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormRow label="Name" error={errors?.name?.message}>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            autoComplete="name"
            {...register("name", { required: "*This field is required" })}
          />
        </FormRow>

        <FormRow label="Email address" error={errors?.email?.message}>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            autoComplete="username"
            {...register("email", { required: "*This field is required" })}
          />
        </FormRow>

        <FormRow label="Phone Number" error={errors?.phone?.message}>
          <input
            type="tel"
            id="phone"
            placeholder="Enter your phone number"
            autoComplete="username"
            {...register("phone", { required: "*This field is required" })}
          />
        </FormRow>

        <FormRow label="Subject" error={errors?.subject?.message}>
          <input
            type="text"
            id="subject"
            placeholder="Enter the subject"
            autoComplete="username"
            {...register("subject", { required: "*This field is required" })}
          />
        </FormRow>

        <FormRow label="Message">
          <textarea
            type="text"
            placeholder="Enter your message"
            id="message"
            {...register("message")}
          />
        </FormRow>

        <FormRow>
          <Button variation="primary" additionalStyles="px-4">
            Submit
          </Button>
        </FormRow>
      </form>
    </div>
  );
}

export default ContactForm;
