import React, {Component} from 'react';
import TodoList from "../TodoList/TodoList";
import AppHeader from "../AppHeader/AppHeader";
import './style.css';
import TopPanel from "../TopPanel/TopPanel";
import NewItem from "../NewItem/NewItem";

export default class App extends Component {
    id = 1;

    createItem = (title, done = false, important = false, favorite = false) => {
        return {
            itemTitle: title,
            id: this.id++,
            done: done,
            important: important,
            favorite: favorite
        }
    };

    state = {
        todoData: [
            this.createItem('Drink coffe', true, false, true),
            this.createItem('Learn ES6+', false, true),
            this.createItem('Learn React', false, true),
            this.createItem('Learn Redux'),
            this.createItem('Get diploma', false, true),
        ],
        term: '',
        statusFilter: 'all'
    };

    deleteItem = (id) => {
        let {todoData} = this.state,
            index = todoData.findIndex((el) => el.id === id);

        this.setState({
            todoData: [
                ...todoData.slice(0, index),
                ...todoData.slice(index + 1)
            ]
        });
    };

    addItem = (title, important) => {
        let newItem = this.createItem(title, false, important),
            newData = [
                ...this.state.todoData, newItem
            ];

        this.setState({
            todoData: newData
        })
    };

    toggleProperty = (id, prop) => {
        let {todoData} = this.state,
            index = todoData.findIndex((el) => el.id === id),
            modifiedItem = todoData[index];

        modifiedItem[prop] = !modifiedItem[prop];

        this.setState({
            todoData: [
                ...todoData.slice(0, index),
                modifiedItem,
                ...todoData.slice(index + 1)
            ]
        });
    };

    search = (e) => {
        this.setState({
            term: e.target.value
        });
    };

    toggleItemsStatus = (status) => {
        this.setState({
            statusFilter: status
        });
    };

    render() {
        let {todoData, term, statusFilter} = this.state,
            done = todoData.filter(el => el.done).length,
            todo = todoData.length - done;

        return (
            <div className="p-5">
                <AppHeader todo={todo} done={done}/>
                <TopPanel onSearch={this.search}
                          term={term}
                          statusFilter={statusFilter}
                          onToggleItemsStatus={this.toggleItemsStatus}/>
                <TodoList todoData={todoData}
                          statusFilter={statusFilter}
                          onDeleteItem={this.deleteItem}
                          onToggleProperty={this.toggleProperty}/>
                <NewItem onAddItem={this.addItem}/>
            </div>
        );
    }
};
