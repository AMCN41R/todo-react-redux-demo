import { IAction } from "../store";

// Actions

export const types = {
    ADD_TODO: 'ADD_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO'
}


// Action Creators

export function addTodo(text: string): IAction<string> {
    return {
        type: types.ADD_TODO,
        payload: text
    };
}

export function toggleTodo(index: number): IAction<number> {
    return {
        type: types.TOGGLE_TODO,
        payload: index
    };
}


// Interfaces

export interface ITodoItem {
    text: string,
    completed: boolean
}


// Reducers

const todoReducer = (state: ITodoItem[] = [], action: IAction<any>): ITodoItem[] => {
    switch (action.type) {

        case types.ADD_TODO:
            return [
                ...state,
                {
                    text: action.payload,
                    completed: false
                }
            ];

        case types.TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.payload) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            });

        default:
            return state;
    }
}

export default todoReducer;