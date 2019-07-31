import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './todoItem';
import AddTodoItem from './addTodoItem';
import Filter from './filter';

class TodoItemList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoItemsList: [
                {
                    id: 0,
                    text: 'read book',
                    status: 0,
                },
                {
                    id: 1,
                    text: 'listen music',
                    status: 0,
                },
                {
                    id: 2,
                    text: 'vocabularies',
                    status: 0,
                }
            ],
            finished: 0
        };

        this.onAddTodoItem = this.onAddTodoItem.bind(this);
        this.onCompleteTodoItem = this.onCompleteTodoItem.bind(this);
        this.onDeleteTodoItem = this.onDeleteTodoItem.bind(this);
    }

    //添加一个任务
    onAddTodoItem(newTodoItem) {
        var allTodoItem = this.state.todoItemsList;
        allTodoItem.push(newTodoItem);
        this.setState({ todoItemsList: allTodoItem });
    }

    //更新完成的任务，改变新完成的任务的状态
    onCompleteTodoItem(todoItem) {
        var sum = 0;
        this.state.todoItemsList.forEach(item => {
            if (item.id === todoItem.id) {
                item.status = 1;
            }
            if (item.status === 1) {
                sum++;
            }
        });
        this.setState({ finished: sum });
    }

    //更新任务总数，通过参数传递给子组件
    onDeleteTodoItem(todoItem){
        var obj = [];
        var sum = 0;
        this.state.todoItemsList.forEach((item) => {
            if(item.id !== todoItem.id){
                obj.push(item);
                if(item.status === 1){
                    sum ++;
                }
            }
        });
        this.setState({
            todoItemsList: obj,
            finished: sum
        })
    }

    render() {
        return (
            <div>
                <h1>TodoList</h1>
                <AddTodoItem addNewTodoItem={this.onAddTodoItem} todoListLength={this.state.todoItemsList.length}/>
                <ul>
                    {this.state.todoItemsList.map((item, index) =>
                        <TodoItem
                            item={item}
                            completeTodoItem={this.onCompleteTodoItem}
                            deleteTodoItem={this.onDeleteTodoItem}
                            key={index}
                        />
                    )}
                    <li>{this.state.finished} COMPLETED / {this.state.todoItemsList.length} ALL</li>
                </ul>
                <Filter />
            </div>
        )
    }
}

TodoItemList.propTypes = {
    todoItemsList: PropTypes.array.isRequired,
    finished: PropTypes.number.isRequired,
}

export default TodoItemList;