import React from 'react';
import Link from './link';
import FilterTypes from '../constants';

class Filter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: FilterTypes.ALL
        }
        this.onSetFilter = this.onSetFilter.bind(this);
    }

    onSetFilter(filterTypes) {

    }

    render() {
        return (
            <div>
                <p>
                    <Link   filter={FilterTypes.ALL} 
                            isActive={this.state.active === FilterTypes.ALL ? true : false}
                            >{FilterTypes.ALL}</Link>
                    <Link   filter={FilterTypes.COMPLETED}  
                            isActive={this.state.active === FilterTypes.COMPLETED ? true : false}
                            >{FilterTypes.COMPLETED}</Link>
                    <Link   filter={FilterTypes.UNCOMPLETED}
                            isActive={this.state.active === FilterTypes.UNCOMPLETED ? true : false}
                            >{FilterTypes.UNCOMPLETED}</Link>
                </p>
            </div>
        )
    }
}

export default Filter;