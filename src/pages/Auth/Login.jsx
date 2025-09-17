import { useForm } from "react-hook-form";

import Input from "../../component/UI/Input";

import useMutationData from "../../hooks/useMutationData";
import { data } from "react-router-dom";

function Login() {
  const { register, handleSubmit } = useForm();
  const inputProps = {
    register: register,
    className: "form--input w-[226px]",
  };
  const { mutate, isLoading, isSuccess } = useMutationData(
    "url",
    "post",
    "loginreq",
    {
      onSuccess: (data) => {
        storage.Set({ key: "userInfo", value: data });
      },
    }
  );
  return (
    <div className="min-h-screen">
      <div className="my-20 text-center">
        <h1 className="font-bold text-[43px]"> CAMICO </h1>
        <h2 className="text-[16px]"> Intelligent Service </h2>
      </div>

      <h2 className="font-bold text-center leading-none tracking-normal">
        Welcome Back!
      </h2>

      <form
        className="mx-auto mt-auto py-8 w-[226px]"
        onSubmit={handleSubmit((data) => mutate(data))}
      >
        <div className="py-2">
          <Input
            {...inputProps}
            placeholder={"example@gmail.com"}
            type={"email"}
            registerName={"email"}
            label={"Email adreess"}
          />
          <Input
            {...inputProps}
            placeholder={"Password"}
            type={"Password"}
            registerName={"password"}
            label={"Password"}
          />
          <p className="my-2 h-[28px] font-normal text-[#8E8E93] text-[12px] leading-[14px] tracking-[0.01em]">
            {" "}
            Use at latest 8 characters with 1 number , and on special character.{" "}
          </p>
        </div>

        <button className="bg-[#27AE60] my-2 rounded-[34px] w-[226px] h-[33px] text-[#ffff]">
          {isLoading ? <div>loading</div> : "Log in"}
        </button>

        <div className="text-center">
          <a className="text-[#8E8E93] underline cursor-pointer">
            {" "}
            Forget Password?{" "}
          </a>
        </div>
      </form>
    </div>
  );
}

export default Login;
