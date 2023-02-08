/**
 * Mon code définit un store Redux.
 Il importe les fichiers nécessaires pour la mise en place d'un store Redux.
 Il utilise combineReducers pour combiner plusieurs réducteurs en un seul, et le stockage avec redux-persist est également configuré.
 Enfin, le store est créé en utilisant createStore avec le réducteur persisté et en utilisant l'extension de développeur de Redux.
 La persistance du store est également mise en place avec persistStore.
 */

import { combineReducers, legacy_createStore as createStore } from "redux";
import employeesReducer from "./employees/employees.reducers";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  employees: employeesReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);
