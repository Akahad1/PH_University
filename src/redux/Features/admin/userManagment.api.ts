import { baseApi } from "../../api/baseApi";

const userManagment = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addStudent: builder.mutation({
      query: () => ({
        url: "/users/create-student",
        method: "POST",
      }),
    }),
  }),
});

export const { useAddStudentMutation } = userManagment;
