import React from 'react';
import TodoListItem from "../TodoListItem/TodoListItem";
import './style.css';

const TodoList = ({todoData, onDeleteItem, onToggleProperty}) => {
    let listItems = todoData.map((item) => {
        return (
            <li key={item.id} className="list-group-item">
                <TodoListItem item={item}
                              onDeleteItem={onDeleteItem}
                              onToggleProperty={onToggleProperty}
                />
            </li>
        )
    });

    return (
        <ul className="list-group todo-list">
            {listItems.length ? listItems : <div className="alert alert-danger">This list is empty. Add new todo item!</div>}
        </ul>
    );
};

export default TodoList;