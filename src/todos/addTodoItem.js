import React from 'react';

class AddTodoItem extends React.Component{
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state={
            input: ''
        }
    }

    onSubmit(e){
        e.preventDefault();
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
            this.setState({
                input: ''
            })
        }
    }

    onChange(e){
        this.setState({
            input:e.target.value,
        })
    }

    render(){
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" ref="newTodoItemTextRef" placeholder="你打算做什么" value={this.state.input} onChange={this.onChange.bind(this)}/>
                <input type="button" value="添加" onClick={this.onSubmit} />
            </form>
        )
    }
}

export default AddTodoItem;