import {
  Button,
  Pagination,
  Space,
  Table,
  TableColumnsType,
  TableProps,
} from "antd";
import { useGetAllSudentQuery } from "../../../redux/Features/admin/academicManagment.api";
import { useState } from "react";
import { TQureyParam } from "../../../types/gobal";
import { TStudent } from "../../../types/userManagement.type";
import { Link } from "react-router-dom";

type TStudentpike = Pick<TStudent, "id" | "email">;
const ShowStudent = () => {
  const [params, setParams] = useState<TQureyParam[]>([]);
  const [page, setPages] = useState(1);
  const {
    data: studentData,
    isLoading,
    isFetching,
  } = useGetAllSudentQuery([
    { name: "limit", value: 3 },
    { name: "page", value: page },
    { name: "sort", value: "id" },
    ...params,
  ]);

  console.log(studentData);

  const tableData = studentData?.data?.map(({ _id, name, id, email }) => ({
    key: _id,
    name,
    email,
    id,
  }));
  const metaTadata = studentData?.meta;
  const columns: TableColumnsType<TStudentpike> = [
    {
      title: "Roll",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    // {
    //   title: "Start Month",
    //   dataIndex: "startMonth",
    //   key: "startMonth",
    // },
    // {
    //   title: "End Month",
    //   dataIndex: "endMonth",
    //   key: "endMonth",
    // },
    {
      title: "Action",

      key: "x",

      render: (item) => {
        console.log(item);
        return (
          <Space>
            <Link to={`/admin/studentData/${item.key}`}>
              <Button>Details</Button>
            </Link>
            <Button>Update</Button>
            <Button>Block</Button>
          </Space>
        );
      },
      width: "1%",
    },
  ];
  // const data = [
  //   {
  //     key: "1",
  //     name: "John Brown",
  //     age: 32,
  //     address: "New York No. 1 Lake Park",
  //   },
  //   {
  //     key: "2",
  //     name: "Jim Green",
  //     age: 42,
  //     address: "London No. 1 Lake Park",
  //   },
  //   {
  //     key: "3",
  //     name: "Joe Black",
  //     age: 32,
  //     address: "Sydney No. 1 Lake Park",
  //   },
  //   {
  //     key: "4",
  //     name: "Jim Red",
  //     age: 32,
  //     address: "London No. 2 Lake Park",
  //   },
  // ];

  const onChange: TableProps<TStudentpike>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    if (extra.action === "filter") {
      const queryParams: TQureyParam[] = [];

      filters.name?.forEach((item) =>
        queryParams.push({ name: "name", value: item })
      );
      setParams(queryParams);
    }
  };
  if (isLoading) {
    return "Loading....";
  }
  return (
    <>
      <Table
        loading={isFetching}
        columns={columns}
        dataSource={tableData}
        onChange={onChange}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
      <Pagination
        current={page}
        onChange={(value) => setPages(value)}
        pageSize={metaTadata?.limit}
        total={metaTadata?.total}
      />
    </>
  );
};

export default ShowStudent;
