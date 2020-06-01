import React, { Component } from 'react';
import '../Layout-component/LayoutComponent.css';

class LayoutComponent extends Component
{
    render(){
        return(
            <div>
                <div className="topnav">
                    <a className="active" href="/home">Home</a>
                    
                </div>
                <h3>Risk Management</h3>
            </div>
        )
    }
}

export default LayoutComponent;