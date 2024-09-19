import { Dropdown, Table, TableColumnsType, TableProps } from "antd";

import { TQureyParam } from "../../../types/gobal";
import {
  useGetAllSemsterRegisterdQuery,
  useUpadeteSemsterResterMutation,
} from "../../../redux/Features/admin/CouresMangement.api";
import { TSemester } from "../../../types/coursesManagemetnt.types";
import moment from "moment";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
type TTableData = Pick<
  TSemester,
  "startDate" | "academicSemester" | "status" | "endDate"
>;
const items = [
  {
    label: "Upcoming",
    key: "UPCOMING",
  },
  {
    label: "Ongoing",
    key: "ONGOING",
  },
  {
    label: "Ended",
    key: "ENDED",
  },
];

const RegistradSemester = () => {
  const [upadetSesterReisterd] = useUpadeteSemsterResterMutation();
  const [semsesterid, setSemsterid] = useState("");
  const {
    data: ResgistersemsterData,
    isLoading,
    isFetching,
  } = useGetAllSemsterRegisterdQuery([]);

  console.log(ResgistersemsterData);

  const tableData = ResgistersemsterData?.data?.map(
    ({ _id, status, academicSemester, startDate, endDate }) => ({
      key: _id,
      name: `${academicSemester.name} ${academicSemester.year}`,
      status,
      academicSemester,
      startDate: moment(new Date(startDate)).format("MMMM"),
      endDate: moment(new Date(endDate)).format("MMMM"),
    })
  );
  const handleStatusUpdate: SubmitHandler<FieldValues> = (data) => {
    console.log(data.key);
    const updatedata = {
      id: semsesterid,
      data: {
        status: data.key,
      },
    };
    upadetSesterReisterd(updatedata);
  };

  const menuProps = {
    items,
    onClick: handleStatusUpdate,
  };
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
      title: "startDate",
      dataIndex: "startDate",
      key: "startDate",
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      key: "endDate",
    },
    {
      title: "Action",

      key: "x",
      render: (item) => {
        return (
          <div>
            <Dropdown menu={menuProps}>
              <button onClick={() => setSemsterid(item.key)}>Upadate</button>
            </Dropdown>
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
