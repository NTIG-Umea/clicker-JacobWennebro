import React, { Component } from 'react'
import Storage from '../scripts/Storage'

interface props {title: string, short: string, price: number, updateState: (e: any) => void, upgradeId: string, upgrades: string[], money: number}

export default class Upgrade extends Component<props> {
    
    constructor(props: props) {
        super(props);

        this.Purchase = this.Purchase.bind(this);

    }

    Purchase() {
        if(this.props.price > this.props.money) {
            alert("You cannot afford " + this.props.title)
            return;
        }

        this.props.updateState({ upgrades: [...this.props.upgrades, this.props.upgradeId], money: this.props.money - this.props.price });
        Storage.set({ upgrades: [...this.props.upgrades, this.props.upgradeId], money: this.props.money - this.props.price });
        
        console.log("Purchased item " + this.props.title);
    }

    render() {
        return (
            <div onClick={this.Purchase} className="upgrade">
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
