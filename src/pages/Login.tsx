import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLogInMutation } from "../redux/Features/auth/authApi";
import { useAppDispatch } from "../redux/hook";
import { setUser, TUser } from "../redux/Features/auth/AuthSlice";
import { veryfiyToken } from "../utils/veryfiyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [login] = useLogInMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const getLogInData = async (data: FieldValues) => {
    const tostID = toast.loading("Login");
    try {
      const userInfo = {
        id: data.id,
        password: data.password,
      };
      console.log(userInfo);
      const res = await login(userInfo).unwrap();
      const user = veryfiyToken(res.data.accessToken) as TUser;
      console.log(user);
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("Log In successFully", { id: tostID, duration: 2000 });
      navigate(`/${user.role}/dashBoard`);
    } catch (eror) {
      toast.error("somthig is rong", { id: tostID, duration: 2000 });
    }
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
