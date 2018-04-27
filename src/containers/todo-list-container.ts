import { connect, Dispatch } from "react-redux";
import { IAppState } from "../redux/store";
import { ITodoItem, toggleTodo } from "../redux/todos/todos";
import { filterOptions } from "../redux/visibility/visibility";
import TodoList from "../components/todo-list";

const getVisibleTodos = (todos: ITodoItem[], filter: string) => {
    switch (filter) {
        case filterOptions.SHOW_COMPLETED:
            return todos.filter(t => t.completed)
        case filterOptions.SHOW_ACTIVE:
            return todos.filter(t => !t.completed)
        case filterOptions.SHOW_ALL:
        default:
            return todos
    }
}

interface IStateFromProps {
    todos: ITodoItem[];
}

interface IDispatchFromProps {
    onTodoClick: (index: number) => void;
}

const mapStateToProps = (state: IAppState): IStateFromProps => {
    return {
        todos: getVisibleTodos(state.todos, state.visibility)
    };
}

const mapDispatchToProps = (dispatch: Dispatch): IDispatchFromProps => {
    return {
        onTodoClick:
            (id: number) => dispatch(toggleTodo(id))
    }
}

const VisibleTodoList = connect<IStateFromProps, IDispatchFromProps, void>(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default VisibleTodoList
