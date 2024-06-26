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

    forgotPassword: builder.mutation({
      query: (data) => ({
        url: "forgot-password/",
        method: "POST",
        body: data,
      }),
    }),

    forgotPasswordConfirmation: builder.mutation({
      query: ({ apiData, uid, token }) => ({
        url: `forgot-password-confirmation/${uid}/${token}/`,
        method: "POST",
        body: apiData,
      }),
    }),

    verifyValidForgotPasswordRequest: builder.mutation({
      query: ({ uid, token }) => ({
        url: `verify-valid-forgot-password-request/${uid}/${token}/`,
        method: "POST",
      }),
    }),

    directSignin: builder.mutation({
      query: ({ uid, signin_token }) => ({
        url: `direct-signin/${uid}/${signin_token}/`,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useVerifyEmailQuery,
  useGetUserQuery,
  useSignedOutUserMutation,
  useForgotPasswordMutation,
  useForgotPasswordConfirmationMutation,
  useDirectSigninMutation,
  useVerifyValidForgotPasswordRequestMutation,
} = authApi;
