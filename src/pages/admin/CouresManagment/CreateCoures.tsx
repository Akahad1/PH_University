import { Button, Col, Flex } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../componets/form/PHForm";
import PHSelect from "../../../componets/form/PHSelect";

import { TResponse } from "../../../types/gobal";

import PHInput from "../../../componets/form/PHInput";

import { toast } from "sonner";
import {
  useAddSemsterResterMutation,
  useGetCoursesQuery,
} from "../../../redux/Features/admin/CouresMangement.api";

const CreateCoures = () => {
  const [createCourse] = useAddSemsterResterMutation();
  const { data: courses } = useGetCoursesQuery(undefined);

  const preRequisiteCoursesOptions = courses?.data?.map((item) => ({
    value: item._id,
    label: item.title,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating...");

    const courseData = {
      ...data,
      code: Number(data.code),
      credits: Number(data.credits),
      isDeleted: false,
      preRequisiteCourses: data.preRequisiteCourses
        ? data.preRequisiteCourses?.map((item) => ({
            course: item,
            isDeleted: false,
          }))
        : [],
    };

    console.log(courseData);

    try {
      const res = (await createCourse(courseData)) as TResponse<any>;
      console.log(res);
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("Semester created", { id: toastId });
      }
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
    }
  };

  return (
    <div>
      <Flex justify="center" align="center">
        <Col span={6}>
          <PHForm onSubmit={onSubmit}>
            <PHInput type="text" name="title" label="Title" />
            <PHInput type="text" name="prefix" label="Prefix" />
            <PHInput type="text" name="code" label="Code" />
            <PHInput type="text" name="credits" label="Credits" />
            <PHSelect
              mode="multiple"
              options={preRequisiteCoursesOptions}
              name="preRequisiteCourses"
              label="preRequisiteCourses"
            />
            <Button htmlType="submit">Submit</Button>
          </PHForm>
        </Col>
      </Flex>
    </div>
  );
};

export default CreateCoures;
