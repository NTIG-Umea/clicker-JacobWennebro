import React, { Component, MouseEvent } from 'react'

export default class Burger extends Component<{onClick: (e: MouseEvent<HTMLDivElement>) => void, upgrades: ["patty", "lettuce", "cheese"]}> {
    render() {
        return (
            <div onClick={this.props.onClick} className="burger">
                <div className="burger__bun top burger-item"></div>

                {this.props.upgrades.reverse().map(i => (
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
