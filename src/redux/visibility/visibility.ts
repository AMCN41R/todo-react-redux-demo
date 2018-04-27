import { IAction } from "../store";

// Actions

export const types = {
    SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER'
}

export const filterOptions = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}


// Action Creators

export function setVisibilityFilter(filter: string): IAction<string> {
    return {
        type: types.SET_VISIBILITY_FILTER,
        payload: filter
    };
}


// Reducers

const visibilityReducer = (state: string, action: IAction<string>): string => {
    if (action.type == types.SET_VISIBILITY_FILTER) {
        return action.payload;
    }

    if (!state) {
        return filterOptions.SHOW_ALL;
    }

    return state;
}

export default visibilityReducer;