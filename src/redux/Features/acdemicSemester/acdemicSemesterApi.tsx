import { baseApi } from "../../api/baseApi";

const acdemicSemsterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemster: builder.query({
      query: () => ({
        url: "/academic-semesters",
        method: "GET",
      }),
    }),
  }),
});
export const { useGetAllSemsterQuery } = acdemicSemsterApi;
