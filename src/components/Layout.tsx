import React, { Component, MouseEvent } from 'react'
import Burger from './Burger'
import ReceiptPrice from './ReceiptPrice'
import Storage from '../scripts/Storage'
import LevelBar from './LevelBar';
import Upgrade from './Upgrade';
import UpgradesConfig from '../upgrades.json'

interface state {
    clicks: number
    cps: number
    xp: number
    level: number
    money: number
    upgradeDisplay: string[],
    upgrades: {
        patty: number
        cheese: number
        lettuce: number
    }
}

export default class Layout extends Component<{}, state> {    
    constructor(props: {}) {
        super(props);

        this.BurgerClick = this.BurgerClick.bind(this);

        const s = Storage.get();

        this.state = {
            clicks: s.clicks,
            cps: 0,
            xp: s.xp,
            level: s.level,
            money: s.money,
            upgrades: s.upgrades,
            upgradeDisplay: s.upgradeDisplay
        }

        setInterval(() => {
            this.setState({ cps: 0 });

            const additionalClicks = this.state.upgrades.cheese;
            let i=0;

            while(i < additionalClicks) {
                this.BurgerClick();
                i++;
            }

        }, 1000);

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

    getBurgerHeight(u: { patty: number, cheese: number, lettuce: number }) {
        return u ? (u.patty || 0) + ((u.cheese || 0)*0.1) + ((u.lettuce || 0)*0.1) : 0;
    }
    
    upgradesToPrice(upgrades: { patty: number, cheese: number, lettuce: number }) {
        let price = 0;
        price += (upgrades.patty  || 0) * UpgradesConfig.patty.price;
        price += (upgrades.cheese || 0) * UpgradesConfig.cheese.price;
        price += (upgrades.lettuce || 0) * UpgradesConfig.lettuce.price;
        return price;
    }

    BurgerClick() {
        const lvl = Math.round(this.state.xp)/(100*this.state.level);

        if(lvl >= this.state.level) {
            Storage.set({ level: this.state.level + 1, xp: 0 });

            this.setState({
                level: this.state.level + 1,
                xp: 0,
                clicks: this.state.clicks + 1,
                cps: this.state.cps+1
            });

        } else {
            const xpIncrease = Number((Math.random()*1).toFixed(2).substr(0, 4)) * ((2 * this.state.upgrades.patty) || 1);

            this.setState({
                clicks: this.state.clicks + 1,
                xp: this.state.xp + xpIncrease,
                cps: this.state.cps+1
            });

            //this.SpawnClickText(`+${Math.round(xpIncrease)} XP`, 200, 200);

            Storage.set({ clicks: this.state.clicks, xp: this.state.xp });
        }

        if((((this.state.clicks+1) / 10) % 1) === 0) {
            this.setState({ money: this.state.money + 1 });
            Storage.set({ money: this.state.money });
        }
    }

    render() {
        return (
            <div className="layout">
                <div className="sidebar">
                    <div>
                        <h1 id="title" className="nobold">Burger Clicker™</h1>
                    </div>
                    <div className="receipt">
                        <h1>Cheese Burger</h1>
                        <h3>{this.state.cps} clicks p/s | Height {Math.round(this.getBurgerHeight(this.state.upgrades))} cm</h3>

                        <div className="receipt__prices">

                            <ReceiptPrice item="Patty" price={5} amount={1}/>                        
                            <ReceiptPrice item="Cheese" price={2} amount={1}/> 

                            <ul className="receipt__spacer">
                                <li><p>Extras</p></li>
                                <li></li>
                                <li></li>
                            </ul>
                            <ReceiptPrice item="Patty" price={UpgradesConfig.patty.price} amount={this.state.upgrades.patty || 0}/>                        
                            <ReceiptPrice item="Cheese" price={UpgradesConfig.cheese.price} amount={this.state.upgrades.cheese || 0}/>                        
                            <ReceiptPrice item="Lettuce" price={UpgradesConfig.lettuce.price || 0} amount={this.state.upgrades.lettuce || 0}/>                        
                        
                            <h3 id="totalPrice">Total ${this.upgradesToPrice(this.state.upgrades) + 7}</h3>
                            
                        </div>

                        <span id="barcode">BURGER CLICKER</span>
                    </div>
                    <div className="bank">
                        <p>Balance: ${this.state.money}</p>
                    </div>
                </div>
                <div className="content">

                    <Burger upgrades={this.state.upgrades} onClick={this.BurgerClick} upgradesDisplay={this.state.upgradeDisplay}/>
                    <LevelBar level={this.state.level} xp={this.state.xp}/>

                </div>
                <div className="upgrades">
                    <h1 className="nobold">Upgrades menu</h1>
                    <div className="upgrades__container">
                        <Upgrade title="Patty" upgradeId="patty" short="Doubles the experience points given for every click." price={5} updateState={(e) => this.setState(e)} upgrades={this.state.upgrades} money={this.state.money} upgradeDisplay={this.state.upgradeDisplay}/>
                        <Upgrade title="Cheese" upgradeId="cheese" short="Get one additional click per second for every slice of this melty goodness." price={2} updateState={(e) => this.setState(e)} upgrades={this.state.upgrades} money={this.state.money} upgradeDisplay={this.state.upgradeDisplay}/>
                        <Upgrade title="Lettuce" upgradeId="lettuce" short="It may be gross, but this increases the chance of fry rain!" price={3} updateState={(e) => this.setState(e)} upgrades={this.state.upgrades} money={this.state.money} upgradeDisplay={this.state.upgradeDisplay}/>
                    </div>
                </div>
            </div>
        )
    }
}
