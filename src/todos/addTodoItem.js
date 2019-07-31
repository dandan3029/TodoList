import React from 'react';

class AddTodoItem extends React.Component{
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(){
        var length = this.props.todoListLength;
        var newTodoItemId = length;
        var newTodoItemText = this.refs.newTodoItemTextRef.value;
        if( newTodoItemText !== ''){
            var newItem = {
                id: newTodoItemId,
                text: newTodoItemText,
                status: 0
            }
            this.refs.newTodoItemTextRef.value = '';
            this.props.addNewTodoItem(newItem);
        }
    }

    render(){
        return (
            <div>
                <input type="text" ref="newTodoItemTextRef" placeholder="你打算做什么" />
                <input type="button" value="添加" onClick={this.onSubmit} />
            </div>
        )
    }
}

export default AddTodoItem;