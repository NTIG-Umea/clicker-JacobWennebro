import React, { Component } from 'react'

export default class LevelBar extends Component<{xp: number, level: number, updateLevel: (lvl: number) => void}> {
    private level = this.props.level;
    
    constructor(props: any) {
        super(props);
        

    }

    componentDidUpdate() {
        const lvl = Math.round(this.props.xp)/(100*this.props.level) || 1;
        
        console.log(Math.round(this.props.xp)/(100*this.props.level));

        if(Math.floor(lvl) > this.level) {
            this.level++;
            this.props.updateLevel(this.level);
        }
    }

    render() {
        return (
            <div data-xp={this.props.xp} className="level-bar">
                <div style={{width: "1%"}} className="level-bar__progress">
                    <span>Level {this.props.level}</span>
                </div>
            </div>
        )
    }
}
