import React from 'react';

class Link extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        var isActive = this.props.isActive;
        if(isActive){
            return <b className="filter selected">{this.children}</b>;
        } else {
            return (
                <a href="#" className="filter not-selected" onClick={(ev) => {
                    ev.preventDefault();
                    //onClick();
                  }}>
                    {this.children}
                  </a>
            );
        }
    }
}

export default Link;