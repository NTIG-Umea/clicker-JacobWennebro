import React, { Component, MouseEvent } from 'react'

export default class Burger extends Component<{onClick: (e: MouseEvent<HTMLDivElement>) => void}> {
    render() {
        return (
            <div onClick={this.props.onClick} className="burger">
                <div className="burger__bun top burger-item"></div>

                {["lettuce","patty","cheese","patty","cheese","patty","cheese","patty","cheese","patty","cheese","patty","cheese","patty",].reverse().map(i => (
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
