import React, {Component} from 'react';
class TodoApp extends Component{
    
    render(){
        return(
            <div>
                <todos />
                <filter />
            </div>
        );
    }
}
export default TodoApp;