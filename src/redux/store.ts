import { combineReducers, createStore } from "redux";
import todoReducer, { ITodoItem, addTodo, toggleTodo } from "./todos/todos";
import visibilityReducer, { filterOptions, setVisibilityFilter } from "./visibility/visibility";

export interface IAction<T> {
    type: string,
    payload: T
}

export interface IAppState {
    visibility: string,
    todos: ITodoItem[]
}

const initialState: IAppState = {
    visibility: filterOptions.SHOW_ALL,
    todos: []
};

const todoApp = combineReducers<IAppState>({
    visibility: visibilityReducer,
    todos: todoReducer
});

export default todoApp;