import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { v4 as uuidv4 } from 'uuid';

import { Header, TodoList, ItemStatusFilter } from './components';
import ItemAddForm from './components/ItemAddForm/ItemAddForm';
import SearchPanel from './components/SearchPanel/SearchPanel';

import styles from './index.module.css';

export default class App extends Component {

    state = {
        todoData: [
            this.createNewItem('item1'),
            this.createNewItem('item2'),
            this.createNewItem('fwaefv'),
            this.createNewItem('mn nvf'),
        ],
        searchStr: '',
    };

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const before = todoData.slice(0, idx);
            const after = todoData.slice(idx + 1);

            const newArr = [...before, ...after];

            return {
                todoData: newArr
            };

        });
    };

    addTodo = (text) => {
        this.setState(({ todoData }) => {
            const newArrAdd = [...todoData, this.createNewItem(text)];
            return {
                todoData: newArrAdd
            };
        });
    };

    createNewItem(label) {
        const newItem = {
            label: label,
            important: false,
            done: false,
            id: uuidv4()
        };
        return newItem;
    };
    findItemIndex(arr, id) {
        let idx = arr.findIndex((el) => el.id === id);
        return idx;
    }

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done'),
            };
        });
    };

    toggleProperty(arr, id, propName) {
        let oldObj = arr[this.findItemIndex(arr, id)];
        let newObj = { ...oldObj, [propName]: !oldObj[propName] };
        return [
            ...arr.slice(0, this.findItemIndex(arr, id)),
            newObj,
            ...arr.slice(this.findItemIndex(arr, id) + 1),
        ];

    }

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important'),
            };

        });
    };

    search(items, str) {
        if (str.length === 0) {
            return items;
        }
        return items.filter((item) => {
            return item.label.indexOf(str) > -1
        });
    }

    onSearch = (str) => {
        this.setState(() => {
            return ({
                searchStr: str,
            });
        });
    }

    render() {
        const { todoData, searchStr } = this.state;
        const visible = this.search(todoData, searchStr);
        return (
            <div className={styles.container} >
                < Header todos={this.state.todoData} />
                <div className={styles.searchwrapper}>
                    <SearchPanel
                        onSearch={this.onSearch}
                    />
                    <ItemStatusFilter />
                </div>
                <TodoList
                    todos={visible}
                    onDelete={this.deleteItem}
                    onDone={this.onToggleDone}
                    onImportant={this.onToggleImportant}
                />
                <ItemAddForm addItem={this.addTodo} />
            </div>
        );
    };

}

ReactDOM.render(<App />, document.getElementById('root'));
