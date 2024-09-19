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
    }),

    addSemsterRester: builder.mutation({
      query: (data) => ({
        url: "/semester-registrations/create-semester-registration",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useAddSemsterResterMutation, useGetAllSemsterRegisterdQuery } =
  coursesManagmentApi;
