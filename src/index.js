import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { v4 as uuidv4 } from 'uuid';

import { Header, TodoList, SearchPanel, ItemStatusFilter, ItemAddForm } from './components';


import styles from './index.module.css';

export default class App extends Component {

    state = {
        todoData: [
            this.createNewItem('item1'),
            this.createNewItem('item2'),
        ]
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
    findItemIndex(arr,id){
        let idx = arr.findIndex((el) => el.id === id);
        return idx;
    }

   
    onToggleDone = (id) => { 
        this.setState(({ todoData }) => {
            let idx = todoData.findIndex((el) => el.id === id);
                       let oldObj = todoData[idx];
            let newObj = {
                ...oldObj,
                done: !oldObj.done,
            };           
            let newArrDone = [
                ...todoData.slice(0, idx),
                newObj,
                ...todoData.slice(idx + 1),
            ];
            return {
                todoData: newArrDone
            };          
        });
    };

    onToggleImportant = (id) => {
        console.log(`important ${id}`);
        this.setState(({todoData}) => {           
            let oldObj = todoData[ this.findItemIndex(todoData,id)];
            let newObj = {...oldObj, important: !oldObj.important};
            let newArr = [
                ...todoData.slice(0,this.findItemIndex(todoData,id)),
                newObj,
                ...todoData.slice(this.findItemIndex(todoData,id)+1),
            ];

            return{
                todoData: newArr
            };

        });
    };

    render() {
        return (
            <div className={styles.container} >
                < Header todos={this.state.todoData} />
                <div className={styles.searchwrapper}>
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList
                    todos={this.state.todoData}
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
