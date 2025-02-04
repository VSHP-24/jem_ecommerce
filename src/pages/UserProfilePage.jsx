import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import MyProfileForm from "../features/user/MyProfileForm";
import UserContactDetailsForm from "../features/user/UserContactDetailsForm";

function UserProfilePage() {
  return (
    <div className="flex max-w-fit flex-col gap-16 justify-self-center">
      <MyProfileForm />
      <UpdatePasswordForm />
      <UserContactDetailsForm />
    </div>
  );
}

export default UserProfilePage;
