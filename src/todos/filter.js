import React from 'react';
import Link from './link';
import FilterTypes from '../constants';

class Filter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: this.props.active
        }
        this.onChangeFilter = this.onChangeFilter.bind(this);
    }

    onChangeFilter(filterType) {
        this.setState({active:filterType});
        this.props.onChangeFilter(filterType);
    }

    render() {
        return (
            <div>
                <p>
                    <Link   filter={FilterTypes.ALL} 
                            isActive={this.state.active === FilterTypes.ALL ? true : false}
                            changeFilter={this.onChangeFilter}
                            >{FilterTypes.ALL}</Link>
                    <Link   filter={FilterTypes.COMPLETED}  
                            isActive={this.state.active === FilterTypes.COMPLETED ? true : false}
                            changeFilter={this.onChangeFilter}
                            >{FilterTypes.COMPLETED}</Link>
                    <Link   filter={FilterTypes.UNCOMPLETED}
                            isActive={this.state.active === FilterTypes.UNCOMPLETED ? true : false}
                            changeFilter={this.onChangeFilter}
                            >{FilterTypes.UNCOMPLETED}</Link>
                </p>
            </div>
        )
    }
}

export default Filter;