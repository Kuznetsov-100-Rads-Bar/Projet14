import {
  DEFINE_EMPLOYEE_ACTION,
  REMOVE_EMPLOYEE_ACTION,
} from "./employees.reducers";

export const defineEmployeesAction = (data) => ({
  type: DEFINE_EMPLOYEE_ACTION,
  payload: data,
});

export const removeUserDataAction = (employeeId) => ({
  type: REMOVE_EMPLOYEE_ACTION,
  payload: employeeId,
});
