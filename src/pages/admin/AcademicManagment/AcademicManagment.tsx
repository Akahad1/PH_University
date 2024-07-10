import React from "react";
import { useGetAllSemsterQuery } from "../../../redux/Features/acdemicSemester/acdemicSemesterApi";

const AcademicManagment = () => {
  const { data } = useGetAllSemsterQuery(undefined);
  console.log(data);
  return <div>Hello</div>;
};

export default AcademicManagment;
