import React from 'react';

class Link extends React.Component{
    constructor(props){
        super(props);
        this.onclick = this.onclick.bind(this);
    }

    onclick(ev){
        this.props.changeFilter(ev.target.innerHTML);
    }

    render(){
        var isActive = this.props.isActive;
        if(isActive){
            return <b className="filter selected">{this.props.children}</b>;
        } else {
            return (
                <a href="#" className="filter not-selected" onClick={(ev) => {
                    ev.preventDefault();
                    this.onclick(ev);
                  }}>
                    {this.props.children}
                  </a>
            );
        }
    }
}

export default Link;