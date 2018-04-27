import * as React from "react";

export interface ITodoItemProps {
    text: string;
    completed: boolean;
    onClick: () => void;
}

const TodoItem = ({ text, completed, onClick }: ITodoItemProps) => (
    <li
        onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        {text}
    </li>
);

export default TodoItem;