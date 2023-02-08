/**
 * Mon programme ci-dessous définit un réducteur de employés qui ajoute et supprime des employés du magasin Redux.
 * 
 * Ce code définit un état initial vide et deux actions: DEFINE_EMPLOYEE_ACTION et REMOVE_EMPLOYEE_ACTION. Ensuite, il définit un réducteur de employés qui prend en entrée l'état initial et l'action et renvoie le nouvel état. Dans le switch, lorsqu'une action de type DEFINE_EMPLOYEE_ACTION est passée, le réducteur place le payload de l'action dans le store Redux. Lorsqu'une action de type REMOVE_EMPLOYEE_ACTION est passée, le réducteur recherche l'index de l'employé correspondant à l'employeeId passé dans le payload, puis supprime cet élément en fonction de l'index. Une fois les modifications effectuées, le nouvel état est renvoyé.
 */
const initialState = [];

export const DEFINE_EMPLOYEE_ACTION = "employees/define";
export const REMOVE_EMPLOYEE_ACTION = "employees/remove";

const employeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEFINE_EMPLOYEE_ACTION:
      state = [...state, action.payload];
      return state;
    case REMOVE_EMPLOYEE_ACTION:
      const index = state.findIndex((data) => data.id === action.payload);

      if (index < 0) {
        return state;
      }

      const copy = state;
      state = copy.splice(index, 1);

      return state;
    default:
      break;
  }
  return state;
};

export default employeesReducer;
