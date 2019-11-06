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

    searchChange = (e) => {
        this.setState({term: e.target.value});
    };

    search = () => {
        const items = this.state.todoData;

        if (this.state.term === '') {
            return items;
        }

        return items.filter(el => el.itemTitle.toLowerCase()
                    .indexOf(this.state.term.toLowerCase()) > -1);
    };

    toggleItemsStatus = (status) => {
        this.setState({
            statusFilter: status
        });
    };

    filter = itemAfterSearch => {
        const {statusFilter} = this.state;

        if (statusFilter === 'all') {
            return itemAfterSearch;
        }

        let filteredItems = itemAfterSearch.filter(el => {
             if (statusFilter === 'done') {
                return el.done;
             } else if (statusFilter === 'important') {
                return el.important;
             } else if (statusFilter === 'favorite') {
                 return el.favorite;
             } else {
                 return !el.done;
             }
        });

        return filteredItems;
    };

    render() {
        let {todoData, term, statusFilter} = this.state,
            searchResult = this.filter(this.search()),
            done = todoData.filter(el => el.done).length,
            todo = todoData.length - done;

        return (
            <div className="p-5">
                <AppHeader todo={todo} done={done}/>
                <TopPanel onSearch={this.searchChange}
                          term={term}
                          statusFilter={statusFilter}
                          onToggleItemsStatus={this.toggleItemsStatus}/>
                <TodoList todoData={searchResult}
                          onDeleteItem={this.deleteItem}
                          onToggleProperty={this.toggleProperty}/>
                <NewItem onAddItem={this.addItem}/>
            </div>
        );
    }
};
