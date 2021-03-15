import React, { Component, MouseEvent } from 'react'
import Burger from './Burger'
import ReceiptPrice from './ReceiptPrice'
import Storage from '../scripts/Storage'
import LevelBar from './LevelBar';

interface state {
    clicks: number
    xp: number
    level: number
}

export default class Layout extends Component<{}, state> {

    constructor(props: {}) {
        super(props);

        this.BurgerClick = this.BurgerClick.bind(this);

        const s = Storage.get();

        this.state = {
            clicks: s.clicks,
            xp: s.xp,
            level: s.level
        }

    }

    BurgerClick(e: MouseEvent<HTMLDivElement>) {
        const b = e.currentTarget;
        
        this.setState({
            clicks: this.state.clicks + 1,
            xp: this.state.xp + (Number((Math.random()*1).toFixed(2))+1)
        });

        Storage.set({ clicks: this.state.clicks, xp: this.state.xp });

    }

    render() {
        return (
            <div className="layout">
                <div className="sidebar">
                    <h1 id="title">Burger Clicker™</h1>
                    <div className="receipt">
                        <h1>Cheese Burger</h1>
                        <h3>Clicked {this.state.clicks} times</h3>

                        <div className="receipt__prices">
                            <ReceiptPrice item="Patty" price={2} amount={1}/>
                        </div>

                        <span id="barcode">BURGER CLICKER</span>
                    </div>
                    <div className="bank">
                        <p>Balance: $5000</p>
                    </div>
                </div>
                <div className="content">

                    <Burger onClick={this.BurgerClick}/>
                    <LevelBar updateLevel={(lvl: number) => this.setState({level: lvl})} level={this.state.level} xp={this.state.xp}/>

                </div>
            </div>
        )
    }
}
