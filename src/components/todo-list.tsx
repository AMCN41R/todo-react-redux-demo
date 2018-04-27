import * as React from "react";
import TodoItem from "./todo-item";

export interface ITodoListProps {
    todos: ITodoItem[];
    onTodoClick: (index: number) => void;
}

export interface ITodoItem {
    text: string;
    completed: boolean;
}

const TodoList = ({ todos, onTodoClick }: ITodoListProps) => (
    <ul>
        {todos.map(
            (item, index) => 
                <TodoItem key={index} {...item} onClick={() => onTodoClick(index)} />
        )}
    </ul>
);

export default TodoList;