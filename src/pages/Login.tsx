import { Button, Row } from "antd";
import { FieldValues, useForm, useFormContext } from "react-hook-form";
import { useLogInMutation } from "../redux/Features/auth/authApi";
import { useAppDispatch } from "../redux/hook";
import { setUser, TUser } from "../redux/Features/auth/AuthSlice";
import { veryfiyToken } from "../utils/veryfiyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../componets/form/PHForm";
import PHInput from "../componets/form/PHInput";

const Login = () => {
  // const { register, handleSubmit } = useForm();
  const [login] = useLogInMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const getLogInData = async (data: FieldValues) => {
    const tostID = toast.loading("Login");

    try {
      const userInfo = {
        id: data.userId,
        password: data.password,
      };
      console.log(userInfo);
      const res = await login(userInfo).unwrap();
      const user = veryfiyToken(res.data.accessToken) as TUser;
      console.log(res);
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("Log In successFully", { id: tostID, duration: 2000 });
      if (res.data?.needsPasswordChange) {
        navigate(`/change-password`);
      } else {
        navigate(`/${user.role}/dashBoard`);
      }
    } catch (eror) {
      toast.error("somthig is rong", { id: tostID, duration: 2000 });
    }
  };
  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <PHForm onSubmit={getLogInData}>
        <PHInput type="text" name="userId" label="ID"></PHInput>

        <PHInput type="text" name="password" label="Password"></PHInput>

        <Button htmlType="submit">logIn</Button>
      </PHForm>
    </Row>
  );
};

export default Login;
