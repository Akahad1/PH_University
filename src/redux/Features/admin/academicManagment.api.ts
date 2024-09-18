import { TAcademicDepartment } from "../../../types/academicManagment.types";
import { TAcademicSemster } from "../../../types/acdemicSemster.type";
import { TQureyParam, TResponsRedux } from "../../../types/gobal";
import { baseApi } from "../../api/baseApi";

const academicManagmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemster: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQureyParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/academic-semesters",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponsRedux<TAcademicSemster[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    getAcademicDepartments: builder.query({
      query: () => {
        return { url: "/academic-departments", method: "GET" };
      },
      transformResponse: (response: TResponsRedux<TAcademicDepartment[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),

    addAcademicSemster: builder.mutation({
      query: (data) => ({
        url: "/academic-semesters/create-academic-semester",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllSemsterQuery,
  useGetAcademicDepartmentsQuery,
  useAddAcademicSemsterMutation,
} = academicManagmentApi;
