import React, { Component, MouseEvent } from 'react'
import Burger from './Burger'
import ReceiptPrice from './ReceiptPrice'
import Storage from '../scripts/Storage'
import LevelBar from './LevelBar';

interface state {
    clicks: number
    xp: number
    level: number
    money: number
}

export default class Layout extends Component<{}, state> {

    constructor(props: {}) {
        super(props);

        this.BurgerClick = this.BurgerClick.bind(this);

        const s = Storage.get();

        this.state = {
            clicks: s.clicks,
            xp: s.xp,
            level: s.level,
            money: s.money
        }

    }

    SpawnClickText(text: string, x: number, y: number) {
        const temp = document.createElement("span");
        temp.innerHTML = text;
        temp.style.position = "absolute";
        temp.style.top = y-(Math.random() * (1000) - 500)+"px";
        temp.style.left = x+(Math.random() * (500) - 700)+"px";
        temp.classList.add("temp-click-text");

        document.querySelector(".content")?.appendChild(temp);

        setTimeout(() => {
            temp.remove();
        }, 4000);
    }

    BurgerClick(e: MouseEvent<HTMLDivElement>) {
        const b = e.currentTarget;

        const lvl = Math.round(this.state.xp)/(100*this.state.level);

        if(lvl >= this.state.level) {
            Storage.set({ level: this.state.level + 1, xp: 0 });

            this.setState({
                level: this.state.level + 1,
                xp: 0,
                clicks: this.state.clicks + 1,
            });

        } else {
            const xpIncrease = Number((Math.random()*1).toFixed(2).substr(0, 4));

            this.setState({
                clicks: this.state.clicks + 1,
                xp: this.state.xp + xpIncrease
            });

            this.SpawnClickText(`+${xpIncrease} XP`, e.clientX, e.clientY);

            Storage.set({ clicks: this.state.clicks, xp: this.state.xp });
        }

        if((((this.state.clicks+1) / 100) % 1) === 0) {
            Storage.set({ money: this.state.money + 1 });

            this.setState({
                money: this.state.money + 1
            });
        }
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
                        <p>Balance: ${this.state.money}</p>
                    </div>
                </div>
                <div className="content">

                    <Burger onClick={this.BurgerClick}/>
                    <LevelBar level={this.state.level} xp={this.state.xp}/>

                </div>
                <div className="upgrades">

                </div>
            </div>
        )
    }
}
