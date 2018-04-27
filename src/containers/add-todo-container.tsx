import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { addTodo } from "../redux/todos/todos";

export interface IAddTodoProps {
    dispatch: Dispatch
}

const AddTodo = ({ dispatch }: IAddTodoProps) => {
    let input: HTMLInputElement;

    return (
        <div>
            <input type="text" ref={node => input = node} />
            <button onClick={() => dispatch(addTodo(input.value))}>Add</button>
        </div >
    )
}

const AddTodoContainer = connect()(AddTodo);

export default AddTodoContainer;