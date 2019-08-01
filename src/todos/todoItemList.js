import React from 'react';
import TodoItem from './todoItem';
import AddTodoItem from './addTodoItem';
import Filter from './filter';
import FilterTypes from '../constants';

class TodoItemList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoItemsList: [
                {
                    id:0,
                    text: 'first',
                    status: FilterTypes.UNCOMPLETED,
                },
                {
                    id:1,
                    text: 'second',
                    status: FilterTypes.UNCOMPLETED,
                },
                {
                    id:2,
                    text: 'third',
                    status: FilterTypes.COMPLETED,
                }
            ],
            filterTodoItemsList: [],
            finished: 1,
            filterType: FilterTypes.ALL,
        };
        this.state.todoItemsList.forEach((item) => {
            this.state.filterTodoItemsList.push(item);
        })

        this.onAddTodoItem = this.onAddTodoItem.bind(this);
        this.onCompleteTodoItem = this.onCompleteTodoItem.bind(this);
        this.onDeleteTodoItem = this.onDeleteTodoItem.bind(this);
        this.onChangeFilter = this.onChangeFilter.bind(this);
    }

    //添加一个任务
    onAddTodoItem(newTodoItem) {
        var allTodoItem = this.state.todoItemsList;
        allTodoItem.push(newTodoItem);
        this.setState({ todoItemsList: allTodoItem });
        
        if(this.state.filterType === FilterTypes.UNCOMPLETED){
            var tmpFilterTodoItemList = this.state.filterTodoItemsList;
            tmpFilterTodoItemList.push(newTodoItem);
            this.setState({ filterTodoItemsList: tmpFilterTodoItemList});
        }
    }

    //切换完成与未完成状态，改变新完成的任务的状态
    onCompleteTodoItem(todoItem) {
        var tmpFinished = 0;
        this.state.todoItemsList.forEach(item => {
            if (item.id === todoItem.id) {
                item.status = (item.status === FilterTypes.COMPLETED ? FilterTypes.UNCOMPLETED : FilterTypes.COMPLETED);
            }
            if (item.status === FilterTypes.COMPLETED) {
                tmpFinished++;
            }
        });
        this.state.filterTodoItemsList.forEach(item => {
            if( item.id === todoItem.id){

            }
        })
        this.setState({ finished: tmpFinished });

        var tmpFilterTodoItemList = [];
        this.state.filterTodoItemsList.forEach((item) => {
            if(todoItem.status !== this.state.filterType){
                tmpFilterTodoItemList.push(item);
            }
        });
        this.setState({filterTodoItemsList: tmpFilterTodoItemList});
    }

    //删除一个任务，通过参数传递给子组件
    onDeleteTodoItem(todoItem){
        var tmpTodoItemsList = [];
        var tmpFinished = 0;
        this.state.todoItemsList.forEach((item) => {
            if(item.id !== todoItem.id){
                tmpTodoItemsList.push(item);
                if(item.status === FilterTypes.COMPLETED){
                    tmpFinished ++;
                }
            }
        });
        this.setState({
            todoItemsList: tmpTodoItemsList,
            finished: tmpFinished
        });

        var tmpFilterTodoItemList = [];
        this.state.filterTodoItemsList.forEach((item) => {
            if(item.id !== todoItem.id){
                tmpFilterTodoItemList.push(item);
            }
        })
        this.setState({filterTodoItemsList: tmpFilterTodoItemList});
    }

    //在不同filter之间切换 保证todoItemsList永远是原来的值 使filterTodoItemsList为筛选后的值
    onChangeFilter(filterType){
        //参数需要获得切换到了哪一个filter
        //要做两件事：1.修改参数filterType 2.修改todoItemsList
        this.setState({ filterType: filterType });
        var tmpTodoItemsList = [];
        this.state.todoItemsList.forEach((item) => {
            if(filterType === FilterTypes.ALL ||item.status === filterType){
                tmpTodoItemsList.push(item); 
            }
        });
        this.setState({filterTodoItemsList: tmpTodoItemsList});
    };

    render() {
        return (
            <div>
                <h1>TodoList</h1>
                <AddTodoItem addNewTodoItem={this.onAddTodoItem} todoListLength={this.state.todoItemsList.length}/>
                <Filter active={this.state.filterType} onChangeFilter={this.onChangeFilter} />
                {/* <li>{this.state.finished} COMPLETED / {this.state.todoItemsList.length} ALL</li> */}
                <ul>
                    {this.state.filterTodoItemsList.map((item, index) =>
                        <TodoItem
                            item={item}
                            completeTodoItem={this.onCompleteTodoItem}
                            deleteTodoItem={this.onDeleteTodoItem}
                            key={index}
                        />
                    )}
                </ul>
            </div>
        )
    }
}

export default TodoItemList;