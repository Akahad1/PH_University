import { Form } from "antd";
import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children?: ReactNode;
};
const PHForm = ({ onSubmit, children }: TProps) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <Form onFinish={methods.handleSubmit(onSubmit)}> {children}</Form>;
    </FormProvider>
  );
};

export default PHForm;
