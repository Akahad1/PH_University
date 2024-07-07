import { Button } from "antd";
import React from "react";
import { useForm } from "react-hook-form";
import { useLogInMutation } from "../redux/Features/auth/authApi";
import Password from "antd/es/input/Password";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [login, { data, error }] = useLogInMutation();
  console.log("data", data);
  const getLogInData = (data) => {
    const userInfo = {
      id: data.id,
      password: data.password,
    };
    console.log(userInfo);
    login(userInfo);
  };
  return (
    <form onSubmit={handleSubmit(getLogInData)}>
      <div>
        <label>ID:</label>
        <input type="text" id="id" {...register("id")} />
      </div>
      <div>
        <label>Password:</label>
        <input type="text" id="password" {...register("password")} />
      </div>
      <Button htmlType="submit">logIn</Button>
    </form>
  );
};

export default Login;
