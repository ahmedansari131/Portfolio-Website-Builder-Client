import { createSelector } from "@reduxjs/toolkit";

const selectUserResult = (state) =>
  state.authApi.queries["getUser(undefined)"]?.data ||
  state.authApi.queries["getUser(undefined)"]?.error;

const selectUser = createSelector(selectUserResult, (userResult) => {
  if (!userResult) {
    return {};
  }
  return {
    userResult,
  };
});

export { selectUser, selectUserResult };
