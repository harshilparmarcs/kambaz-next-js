
import { createSlice } from "@reduxjs/toolkit";
import * as db from "../../../Database";

const initialState = {
  assignments: db.assignments,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      state.assignments = [...state.assignments, action.payload];
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment: any) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment: any) =>
        assignment._id === action.payload._id ? action.payload : assignment
      );
    },
    editAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment: any) =>
        assignment._id === action.payload
          ? { ...assignment, editing: true }
          : assignment
      );
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment, editAssignment } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;