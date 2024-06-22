import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const fetchToken = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_API_PATH_PREFIX}/auth/get-user-token/`,
    { credentials: "include" }
  );
  const data = await response.json();
  return data.token;
};

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_PATH_PREFIX}/auth/`,
    credentials: "include",
    prepareHeaders: async (headers) => {
      const token = await fetchToken();
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["User"],
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
    getUser: builder.query({
      query: () => ({
        url: "user/",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: "login/",
        method: "POST",
        body: data,
        headers: { "Content-Type": "application/json" },
      }),
      invalidatesTags: ["User"],
    }),
    signedOutUser: builder.mutation({
      query: () => ({
        url: "signout/",
        method: "POST",
      }),
      invalidatesTags: ["User"],
      // Invalidate cache and reset state on signout
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(authApi.util.resetApiState());
        } catch (err) {
          console.error("Signout failed", err);
        }
      },
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useVerifyEmailQuery,
  useGetUserQuery,
  useSignedOutUserMutation,
} = authApi;
