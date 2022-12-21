import { combineReducers, legacy_createStore as createStore } from "redux"
import employeesReducer from "./employees/employees.reducers";

const reducers = combineReducers({
    employees: employeesReducer
});

const store = createStore(reducers,
    (window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__())
)

export default store;