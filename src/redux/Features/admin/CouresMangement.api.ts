import { TAcademicDepartment } from "../../../types/academicManagment.types";
import { TAcademicSemster } from "../../../types/acdemicSemster.type";
import { TSemester } from "../../../types/coursesManagemetnt.types";
import { TQureyParam, TResponsRedux } from "../../../types/gobal";

import { baseApi } from "../../api/baseApi";

const coursesManagmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemsterRegisterd: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQureyParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/semester-registrations",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponsRedux<TSemester[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
      providesTags: ["semster"],
    }),
    getCourses: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQureyParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/courses",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponsRedux<any>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
      providesTags: ["courses"],
    }),

    addSemsterRester: builder.mutation({
      query: (data) => ({
        url: "/semester-registrations/create-semester-registration",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["semster"],
    }),
    upadeteSemsterRester: builder.mutation({
      query: (args) => ({
        url: `/semester-registrations/${args.id}`,
        method: "PATCH",
        body: args.data,
      }),
      invalidatesTags: ["semster"],
    }),
    addCouress: builder.mutation({
      query: (data) => ({
        url: `/courses/create-course`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["courses"],
    }),
  }),
});

export const {
  useAddSemsterResterMutation,
  useGetAllSemsterRegisterdQuery,
  useUpadeteSemsterResterMutation,
  useAddCouressMutation,
  useGetCoursesQuery,
} = coursesManagmentApi;
