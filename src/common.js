import React from 'react'
import './App.less'


export default class Common extends React.Component {
    render() {
        return (
            <div className="center">
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
