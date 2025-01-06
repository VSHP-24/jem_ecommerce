import ResetPasswordForm from "../features/authentication/ResetPasswordForm";
import Heading from "../ui/Heading";

function ResetPasswordPage() {
  return (
    <div className="flex flex-col gap-8">
      <Heading as="h4" styles="text-lg tablet:text-xl self-center  ">
        Enter New Password
      </Heading>
      <ResetPasswordForm />
    </div>
  );
}

export default ResetPasswordPage;
