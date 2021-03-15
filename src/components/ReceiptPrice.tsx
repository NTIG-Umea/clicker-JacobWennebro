import React, { Component } from 'react'

export default class ReceiptPrice extends Component<{amount: number, item: string, price: number}> {
    render() {
        return (
            <ul>
                <li>{this.props.amount}</li>
                <li>{this.props.item}</li>
                <li>${this.props.price * this.props.amount}</li>
            </ul>
        )
    }
}
