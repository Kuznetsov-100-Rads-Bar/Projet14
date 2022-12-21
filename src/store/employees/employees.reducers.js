const initialState = [];

export const DEFINE_EMPLOYEE_ACTION = 'employees/define';
export const REMOVE_EMPLOYEE_ACTION = 'employees/remove';

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
    return state
}

export default employeesReducer;