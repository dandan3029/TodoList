import React from 'react';
import FilterType from '../constants';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.onCompleted = this.onCompleted.bind(this);
        this.onDeleted = this.onDeleted.bind(this);
    }

    onCompleted() {
        var status = this.props.item.status;
        status = (status === FilterType.COMPLETED ? FilterType.UNCOMPLETED : FilterType.COMPLETED);
        var obj = {
            id: this.props.item.id,
            text: this.props.item.text,
            status: status
        };
        // 执行父组件传来的方法
        this.props.completeTodoItem(obj);
    }

    onDeleted() {
        this.props.deleteTodoItem(this.props.item);
    }

    render() {
        const item = this.props.item;

        const completed = {
            textDecoration: 'line-through',
        }

        const unCompleted = {
        }

        const itemStyle = (item.status === FilterType.COMPLETED ? completed : unCompleted);
        return (
            <div>
                <li key={item.id} style={itemStyle}>
                    <span
                        onClick={this.onCompleted}
                        id={item.id}
                        style={{ backgroundColor: item.status === FilterType.UNCOMPLETED ? '#fff' : '#A1EAFB' ,
                                 display: 'inline-block',
                                    width:'10px',
                                    height: '10px',
                            border: '2px solid',
                            margin:'0 5px 0'
                        }}  
                    ></span>
                    <span>{item.text}</span>
                    <button onClick={this.onDeleted}>×</button>
                </li>
            </div>
        )
    }
}

export default TodoItem;
