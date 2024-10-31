import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
  assignments: assignments,
};
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    createAssignments: (state, { payload: assignments }) => {
      const newAssignment: any = {
        _id: new Date().getTime().toString(),
        lessons: [],
        name: assignments.name,
        course: assignments.course,
      };
      state.assignments = [...state.assignments, newAssignment] as any;
    },
    deleteAssignments: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (a: any) => a._id !== assignmentId
      );
    },
    updateAssignments: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignment._id ? assignment : a
      ) as any;
    },
    editAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignmentId ? { ...a, editing: true } : a
      ) as any;
    },
  },
});
export const {
  createAssignments,
  deleteAssignments,
  updateAssignments,
  editAssignment,
} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
