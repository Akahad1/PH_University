import { baseApi } from "../../api/baseApi";

const academicManagmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemster: builder.query({
      query: () => ({
        url: "/academic-semesters",
        method: "GET",
      }),
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

export const { useGetAllSemsterQuery, useAddAcademicSemsterMutation } =
  academicManagmentApi;
