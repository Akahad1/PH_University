import { Table, TableColumnsType, TableProps } from "antd";

import { TQureyParam } from "../../../types/gobal";
import { useGetAllSemsterRegisterdQuery } from "../../../redux/Features/admin/CouresMangement.api";
import { TSemester } from "../../../types/coursesManagemetnt.types";
type TTableData = Pick<TSemester, "startDate" | "academicSemester" | "status">;
const RegistradSemester = () => {
  const {
    data: ResgistersemsterData,
    isLoading,
    isFetching,
  } = useGetAllSemsterRegisterdQuery([]);

  console.log(ResgistersemsterData);

  const tableData = ResgistersemsterData?.data?.map(
    ({ _id, status, academicSemester, startDate }) => ({
      key: _id,
      name: `${academicSemester.name} ${academicSemester.year}`,
      status,
      academicSemester,
      startDate,
    })
  );
  const columns: TableColumnsType<TTableData> = [
    {
      title: "academicSemester",
      dataIndex: "name",
      key: "academicSemester",
      showSorterTooltip: { target: "full-header" },
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Start Month",
      dataIndex: "startMonth",
      key: "startMonth",
    },
    {
      title: "End Month",
      dataIndex: "endMonth",
      key: "endMonth",
    },
    {
      title: "Action",

      key: "x",
      render: () => {
        return (
          <div>
            <button>Upadate</button>
          </div>
        );
      },
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

  const onChange: TableProps<TTableData>["onChange"] = (
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
    }
  };
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

export default RegistradSemester;
