import ForgotPasswordForm from "../features/authentication/ForgotPasswordForm";
import Heading from "../ui/Heading";

function ForgotPasswordPage() {
  return (
    <div className="flex flex-col gap-8">
      <Heading as="h4" styles="text-lg tablet:text-xl self-center  ">
        Trouble Logging in?
      </Heading>
      <ForgotPasswordForm />
    </div>
  );
}

export default ForgotPasswordPage;
