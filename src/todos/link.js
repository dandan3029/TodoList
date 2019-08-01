import React from 'react';

class Link extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        var isActive = this.props.isActive;
        if(isActive){
            return <b className="filter selected">{this.props.children}</b>;
        } else {
            return (
                <a href="#" className="filter not-selected" onClick={(ev) => {
                    ev.preventDefault();
                    //onClick();
                  }}>
                    {this.props.children}
                  </a>
            );
        }
    }
}

export default Link;