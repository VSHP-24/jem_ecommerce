import LoginForm from "../features/authentication/LoginForm";
import Heading from "../ui/Heading";

function LoginPage() {
  return (
    <div className="flex flex-col gap-8">
      <Heading as="h4" styles="text-lg tablet:text-xl self-center  ">
        Login to your account
      </Heading>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
