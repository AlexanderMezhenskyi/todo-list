import React from 'react';
import './style.css';

const TodoListItem = ({onDeleteItem, onToggleProperty, item}) => {
    let itemClasses = 'todo-list-item-label';

    itemClasses += item.important ? ' important' : '';
    itemClasses += item.done ? ' done' : '';
    itemClasses += item.favorite ? ' favorite' : '';

    return (
         <span className="todo-list-item">
              <span
                  className={itemClasses}
                  onClick={() => {onToggleProperty(item.id, 'done')}}>
                  {item.itemTitle}
                  <span className="ml-2">{item.favorite ? <i className="fa fa-star"></i> : null}</span>
              </span>

              <button type="button"
                      onClick={() => {onToggleProperty(item.id, 'important')}}
                      className="btn btn-outline-success btn-sm float-right">
                <i className="fa fa-exclamation"/>
              </button>

              <button type="button"
                      onClick={() => {onDeleteItem(item.id)}}
                      className="btn btn-outline-danger btn-sm float-right">
                <i className="fa fa-trash-o"/>
              </button>

               <button type="button"
                       onClick={() => {onToggleProperty(item.id, 'favorite')}}
                       className="btn btn-outline-warning btn-sm float-right">
                <i className="fa fa-star"></i>
              </button>
         </span>
    )
};

export default TodoListItem;