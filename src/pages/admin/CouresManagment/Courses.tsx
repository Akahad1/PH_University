import {
  Button,
  Dropdown,
  Modal,
  Table,
  TableColumnsType,
  TableProps,
} from "antd";

import { TQureyParam } from "../../../types/gobal";
import {
  useAddFacultiesMutation,
  useGetAllFacultiesQuery,
  useGetAllSemsterRegisterdQuery,
  useGetCoursesQuery,
  useUpadeteSemsterResterMutation,
} from "../../../redux/Features/admin/CouresMangement.api";
import { TCourse, TSemester } from "../../../types/coursesManagemetnt.types";
import moment from "moment";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../componets/form/PHForm";
import PHSelect from "../../../componets/form/PHSelect";
type TTableData = Pick<TCourse, "title" | "prefix" | "code">;

const Course = () => {
  const [upadetSesterReisterd] = useUpadeteSemsterResterMutation();
  const [semsesterid, setSemsterid] = useState("");
  const {
    data: courseData,
    isLoading,
    isFetching,
  } = useGetCoursesQuery(undefined);
  const { data: faculiesData } = useGetAllFacultiesQuery(undefined);
  console.log(faculiesData);
  const faculiesDataOption = faculiesData?.data?.map((item) => ({
    value: item._id,
    label: item.fullname,
  }));
  const tableData = courseData?.data?.map((item) => ({
    key: item._id,
    name: `${item.title}`,
    prefix: item.prefix,
    code: item.code,
  }));
  // const handleStatusUpdate: SubmitHandler<FieldValues> = (data) => {
  //   console.log(data.key);
  //   const updatedata = {
  //     id: semsesterid,
  //     data: {
  //       status: data.key,
  //     },
  //   };
  //   upadetSesterReisterd(updatedata);
  // };

  // const menuProps = {
  //   items,
  //   onClick: handleStatusUpdate,
  // };
  const columns: TableColumnsType<TTableData> = [
    {
      title: "Title",
      dataIndex: "name",
      key: "academicSemester",
      showSorterTooltip: { target: "full-header" },
    },
    {
      title: "prefix",
      dataIndex: "prefix",
      key: "prefix",
    },
    {
      title: "code",
      dataIndex: "code",
      key: "startDate",
    },

    {
      title: "Action",

      key: "x",
      render: (item) => {
        return <AddFaculty facultyInfo={item} />;
      },
    },
  ];
  const AddFaculty = ({ facultyInfo }) => {
    console.log(facultyInfo);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [addfaculties] = useAddFacultiesMutation();

    const showModal = () => {
      setIsModalOpen(true);
    };

    const handleOk = () => {
      setIsModalOpen(false);
    };

    const handleCancel = () => {
      setIsModalOpen(false);
    };
    const handleSubmit: SubmitHandler<FieldValues> = (data) => {
      const faculties = {
        courseId: facultyInfo.key,
        data,
      };
      addfaculties(faculties);
    };

    return (
      <>
        <Button type="primary" onClick={showModal}>
          Add Faculty
        </Button>
        <Modal
          title="Basic Modal"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <PHForm onSubmit={handleSubmit}>
            <PHSelect
              mode="multiple"
              options={faculiesDataOption}
              name="faculties"
              label="Faculty"
            ></PHSelect>
            <Button htmlType="submit">Submit</Button>
          </PHForm>
        </Modal>
      </>
    );
  };

  const onChange: TableProps<TTableData>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {};
  if (isLoading) {
    return "Loading....";
  }
  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};

export default Course;
