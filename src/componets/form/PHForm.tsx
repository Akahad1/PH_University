import { Form } from "antd";
import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
type TFormConfig = {
  resolver?: any;
};
type TProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children?: ReactNode;
} & TFormConfig;

const PHForm = ({ onSubmit, children, resolver }: TProps) => {
  const formConfig: TFormConfig = {};

  if (resolver) {
    formConfig["resolver"] = resolver;
  }
  const methods = useForm(formConfig);
  return (
    <FormProvider {...methods}>
      <Form onFinish={methods.handleSubmit(onSubmit)}> {children}</Form>;
    </FormProvider>
  );
};

export default PHForm;
