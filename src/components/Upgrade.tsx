import React, { Component } from 'react'

export default class Upgrade extends Component<{title: string, short: string, price: number}> {
    render() {
        return (
            <div className="upgrade">
                <div>
                    <h2>{this.props.title}</h2>
                    <p>{this.props.short}</p>
                </div>
                <div>
                    <span>${this.props.price}</span>
                </div>
            </div>
        )
    }
}
