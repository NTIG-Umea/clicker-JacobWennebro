import React, { Component, createRef, MouseEvent, RefObject } from 'react'

interface props {onClick: (e: MouseEvent<HTMLDivElement>) => void, upgrades: ["patty", "lettuce", "cheese"]}

export default class Burger extends Component<props> {
    private Burger = createRef() as RefObject<HTMLDivElement>
    private sound = new Audio("/clicker-JacobWennebro/click.mp3");

    render() {

        const mouseDown = () => {
            if(this.Burger.current) this.Burger.current.style.transform = "scale(1.1) translateY(-50%)";
            this.sound.currentTime = 0.1;
            this.sound.play();
        }

        return (
            <div ref={this.Burger} onClick={this.props.onClick} onMouseDown={mouseDown} onMouseUp={() => this.Burger.current ? this.Burger.current.style.transform = "" : ""} className="burger">
                <div className="burger__bun top burger-item"></div>

                {this.props.upgrades.reverse().slice(this.props.upgrades.length-25, this.props.upgrades.length).map((i => 
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