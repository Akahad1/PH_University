import { Form, Select } from "antd";
import { Controller } from "react-hook-form";
type TPHSelet = {
  name: string;
  label: string;
  options: { value: string; label: string; disabled?: boolean }[] | undefined;
  disabled?: boolean;
};
const PHSelect = ({ label, name, options, disabled }: TPHSelet) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Select
            {...field}
            style={{ width: "100%" }}
            options={options}
            disabled={disabled}
          />
          {error && <small>{error.message}</small>}
        </Form.Item>
      )}
    />
  );
};

export default PHSelect;
