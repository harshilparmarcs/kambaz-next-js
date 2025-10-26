

import { createSlice } from "@reduxjs/toolkit";
import * as db from "../Database";

const initialState = {
  enrollments: db.enrollments,
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enrollCourse: (state, action) => {
      const { userId, courseId } = action.payload;
      const newEnrollment = {
        _id: new Date().getTime().toString(),
        user: userId,
        course: courseId,
      };
      state.enrollments.push(newEnrollment);
    },
    unenrollCourse: (state, action) => {
      const { userId, courseId } = action.payload;
      state.enrollments = state.enrollments.filter(
        (enrollment: any) =>
          !(enrollment.user === userId && enrollment.course === courseId)
      );
    },
  },
});

export const { enrollCourse, unenrollCourse } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;