import { Button, Col, Flex } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../componets/form/PHForm";
import PHSelect from "../../../componets/form/PHSelect";
import { monthOptions } from "../../../constant/gobal";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchma } from "../../../Schema/academicSemesterSchma";
import { useAddAcademicSemsterMutation } from "../../../redux/Features/academicManagment/academicManagment.api";
import { toast } from "sonner";
import { TResponse } from "../../../types/gobal";

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
  const [academicSemesterData] = useAddAcademicSemsterMutation();
  const Onsubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastid = toast.loading("Createing..");
    const name = nameOption[Number(data.name) - 1]?.label;
    const semsterData = {
      name,
      code: data.name,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };
    console.log(semsterData);

    try {
      const res = (await academicSemesterData(semsterData)) as TResponse;
      if (res.error) {
        toast.error(res.error.data.message, { id: toastid });
      } else {
        toast.success("Semster Create succesfuly", { id: toastid });
      }
    } catch (err) {
      console.log(err);
    }
  };
  const currentData = new Date().getFullYear();
  const yearOption = [0, 1, 2, 3, 4].map((number) => ({
    value: String(currentData + number),
    label: String(currentData + number),
  }));

  return (
    <div>
      <Flex justify="center" align="center">
        <Col span={6}>
          <PHForm
            onSubmit={Onsubmit}
            resolver={zodResolver(academicSemesterSchma)}
          >
            <PHSelect label="Name" name="name" options={nameOption}></PHSelect>
            <PHSelect label="Year" name="year" options={yearOption}></PHSelect>
            <PHSelect
              label="StartMonth"
              name="startMonth"
              options={monthOptions}
            ></PHSelect>
            <PHSelect
              label="EndMonth"
              name="endMonth"
              options={monthOptions}
            ></PHSelect>
            <Button htmlType="submit">Submit</Button>
          </PHForm>
        </Col>
      </Flex>
    </div>
  );
};

export default CreateASemster;
