import { Button, Col, Flex } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../componets/form/PHForm";
import PHSelect from "../../../componets/form/PHSelect";

const CreateASemster = () => {
  const nameOption = [
    {
      value: "01",
      label: "Autumn",
    },
    {
      value: "02",
      label: "Summer",
    },
    {
      value: "03",
      label: "Fall",
    },
  ];
  const Onsubmit: SubmitHandler<FieldValues> = (data) => {
    const name = nameOption[Number(data.name) - 1].label;
    const semsterData = {
      name,
      code: data.name,
      year: data.year,
    };
    console.log(semsterData);
  };
  const currentData = new Date().getFullYear();
  const yearOption = [0, 1, 2, 3, 4].map((number) => ({
    value: String(currentData + number),
    label: String(currentData + number),
  }));
  console.log(yearOption);

  return (
    <div>
      <Flex justify="center" align="center">
        <Col span={6}>
          <PHForm onSubmit={Onsubmit}>
            <PHSelect label="Name" name="name" options={nameOption}></PHSelect>
            <PHSelect label="Year" name="year" options={yearOption}></PHSelect>
            <PHSelect
              label="StartMonth"
              name="startMonth"
              options={nameOption}
            ></PHSelect>
            <PHSelect
              label="EndMonth"
              name="endMonth"
              options={nameOption}
            ></PHSelect>
            <Button htmlType="submit">Submit</Button>
          </PHForm>
        </Col>
      </Flex>
    </div>
  );
};

export default CreateASemster;
