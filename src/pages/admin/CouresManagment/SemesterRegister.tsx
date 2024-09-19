import { Button, Col, Flex } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../componets/form/PHForm";
import PHSelect from "../../../componets/form/PHSelect";

import {
  useAddAcademicSemsterMutation,
  useGetAllSemsterQuery,
} from "../../../redux/Features/admin/academicManagment.api";
import { TResponse } from "../../../types/gobal";
import PHDatePiker from "../../../componets/form/PHDatePiker";
import PHInput from "../../../componets/form/PHInput";
import { semesterStatusOptions } from "../../../constant/semster";
import { toast } from "sonner";
import { useAddSemsterResterMutation } from "../../../redux/Features/admin/CouresMangement.api";

const SemesterRegister = () => {
  const [addSemsterResterd] = useAddSemsterResterMutation();
  const { data: sData } = useGetAllSemsterQuery([
    { name: "sort", value: "year" },
  ]);
  console.log(sData);
  const semsterDataOption = sData?.data?.map((item) => ({
    value: item._id,
    label: `${item.name} ${item.year}`,
  }));

  const Onsubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastid = toast.loading("Createing..");
    const samsterData = {
      ...data,
      maxCredit: Number(data.maxCredit),
      minCredit: Number(data.minCredit),
    };

    try {
      const res = (await addSemsterResterd(samsterData)) as TResponse<any>;
      if (res.error) {
        toast.error(res.error.data.message, { id: toastid });
      } else {
        toast.success("Semster Create succesfuly", { id: toastid });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Flex justify="center" align="center">
        <Col span={6}>
          <PHForm onSubmit={Onsubmit}>
            <PHSelect
              label="Name"
              name="academicSemester"
              options={semsterDataOption}
            ></PHSelect>
            <PHSelect
              label="Status"
              name="status"
              options={semesterStatusOptions}
            ></PHSelect>
            <PHDatePiker name="startDate" label="Start Date"></PHDatePiker>
            <PHDatePiker name="endDate" label="End Date"></PHDatePiker>
            <PHInput type="text" name="maxCredit" label="Max Credit"></PHInput>
            <PHInput type="text" name="minCredit" label="Min Credit"></PHInput>
            <Button htmlType="submit">Submit</Button>
          </PHForm>
        </Col>
      </Flex>
    </div>
  );
};

export default SemesterRegister;
