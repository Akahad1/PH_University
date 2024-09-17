import { Form, Select } from "antd";
import { Controller } from "react-hook-form";
type TPHSelet = {
  name: string;
  label: string;
  options: { value: string; label: string; disabled?: boolean }[];
};
const PHSelect = ({ label, name, options }: TPHSelet) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Select {...field} style={{ width: "100%" }} options={options} />
          {error && <small>{error.message}</small>}
        </Form.Item>
      )}
    />
  );
};

export default PHSelect;
