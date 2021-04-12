import React, { Component, MouseEvent, RefObject } from 'react'

interface props {onClick: (e: MouseEvent<HTMLDivElement>) => void, upgrades: ["patty", "lettuce", "cheese"]}

export default class Burger extends Component<props> {
    
    render() {
        return (
            <div onClick={this.props.onClick} className="burger">
                <div className="burger__bun top burger-item"></div>

                {console.log(this.props.upgrades.reverse().slice(this.props.upgrades.length-20, this.props.upgrades.length))}
                {this.props.upgrades.reverse().slice(this.props.upgrades.length-20, this.props.upgrades.length).reverse().map((i => 
                    <div className={`burger__${i} burger-item`}></div>
                ))}

                {/* Defaults */}
                <div className="burger__cheese burger-item"></div>
                <div className="burger__patty burger-item"></div>

                <div className="burger__bun bottom burger-item"></div>
            </div>
        )
    }
}
