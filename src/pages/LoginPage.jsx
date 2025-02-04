import { useState } from "react";
import LoginForm from "../features/authentication/LoginForm";
import Heading from "../ui/Heading";

function LoginPage() {
  const [selectedUser, setSelectedUser] = useState("");
  function handleClick(e) {
    setSelectedUser(e.target.id);
  }

  return (
    <div className="flex flex-col gap-4">
      <Heading
        as="h4"
        styles="text-lg tablet:text-xl text-center self-center  "
      >
        Login to your account
      </Heading>
      <LoginForm selectedUser={selectedUser} />
      <Heading
        as="h4"
        styles="text-lg tablet:text-xl self-center text-center  "
      >
        Select Customer Profile
      </Heading>
      <div
        className="flex cursor-pointer flex-wrap justify-evenly gap-4"
        onClick={(id) => handleClick(id)}
      >
        <img
          id="goku"
          src="/goku.webp"
          alt="Goku Profile"
          className="h-20 w-20 rounded-full bg-primary-400"
        />
        <img
          id="mikey"
          src="/mikey.webp"
          alt="Mikey / Manjiro Sano Profile"
          className="h-20 w-20 rounded-full bg-primary-400"
        />{" "}
        <img
          id="shikamaru"
          src="/shikamaru.webp"
          alt="Shikamaru Nara Profile"
          className="h-20 w-20 rounded-full bg-primary-400"
        />{" "}
        <img
          id="naruto"
          src="/naruto.webp"
          alt="Naruto Uzumaki Profile"
          className="h-20 w-20 rounded-full bg-primary-400"
        />{" "}
        <img
          id="sasuke"
          src="/sasuke.webp"
          alt="Sasuke Uchiha Profile"
          className="h-20 w-20 rounded-full bg-primary-400"
        />{" "}
        <img
          id="itadori"
          src="/itadori.webp"
          alt="Yuji Itadori Profile"
          className="h-20 w-20 rounded-full bg-primary-400"
        />{" "}
        <img
          id="jinwoo"
          src="/jinwoo.webp"
          alt="Sung Jin-woo Sung Profile"
          className="h-20 w-20 rounded-full bg-primary-400"
        />
      </div>
    </div>
  );
}

export default LoginPage;
