import React, { Component } from 'react'
import Storage from '../scripts/Storage'

interface props {title: string, short: string, price: number, updateState: (e: any) => void, upgradeId: string, upgrades: { patty: number, cheese: number, lettuce: number}, money: number, upgradeDisplay: string[]}

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

        let upgrades = this.props.upgrades;
        // @ts-ignore
        upgrades[this.props.title.toLowerCase()] ? upgrades[this.props.title.toLowerCase()] += 1 : upgrades[this.props.title.toLowerCase()] = 1;

        if(this.props.upgradeDisplay.length >= 30) this.props.upgradeDisplay.shift();

        this.props.updateState({ upgrades, money: this.props.money - this.props.price, upgradeDisplay: [...this.props.upgradeDisplay, this.props.title.toLowerCase()] });
        Storage.set({ upgrades, money: this.props.money - this.props.price, upgradeDisplay: [...this.props.upgradeDisplay, this.props.title.toLowerCase()] });
        
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
