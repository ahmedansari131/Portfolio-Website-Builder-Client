import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_PATH_PREFIX}/auth/`,
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (data) => ({
        url: "register/",
        method: "POST",
        body: data,
      }),
    }),
    verifyEmail: builder.query({
      query: (token) => ({
        url: `verify-email/?token=${token}`,
        method: "GET",
      }),
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: "login/",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useRegisterUserMutation, userLoginUserMutation, useVerifyEmailQuery } = authApi;
