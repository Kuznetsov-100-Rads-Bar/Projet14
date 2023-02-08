/**
 * ce code définit et supprime les données des employés dans le magasin de données Redux. La fonction defineEmployeesAction définit les données des employés en retournant un objet d'action avec un type DEFINE_EMPLOYEE_ACTION et un payload qui contient les données des employés. La fonction removeUserDataAction supprime les données d'un employé en particulier en retournant un objet d'action avec un type REMOVE_EMPLOYEE_ACTION et un payload qui contient l'identifiant de l'employé à supprimer.
 */
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
