import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TProps = {
  getLogInData: SubmitHandler<FieldValues>;
  children: ReactNode;
};
const PHForm = ({ getLogInData, children }: TProps) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(getLogInData)}>{children}</form>;
    </FormProvider>
  );
};

export default PHForm;
