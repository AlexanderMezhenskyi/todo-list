import React from 'react';
import './style.css';

const AppHeader = ({todo,done}) => {
    return (
        <div className="app-header d-flex">
            <h1>Todo List</h1>
            <h2>{todo ? todo + ' more to do, ' : 'Everything is done! ' } {done} done</h2>
        </div>
    )
};

export default AppHeader;