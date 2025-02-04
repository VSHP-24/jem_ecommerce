import CreateNewUserForm from "../features/authentication/CreateNewUserForm";
import Heading from "../ui/Heading";

function CreateNewCustomerPage() {
  return (
    <div className="flex flex-col gap-8">
      <Heading as="h4" styles="text-lg tablet:text-xl self-center  ">
        Enter your details
      </Heading>
      <CreateNewUserForm />
    </div>
  );
}

export default CreateNewCustomerPage;
