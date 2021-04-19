class Storage {
    private structure = {
        clicks: 0,
        booster: 0,
        xp: 0,
        level: 1,
        money: 0,
        upgrades: {},
        upgradeDisplay: []
    }
    
    constructor() {
        if(!localStorage.getItem("bc-save")) localStorage.setItem("bc-save", JSON.stringify(this.structure));
    }

    get() {
        return JSON.parse(localStorage.getItem("bc-save") || "{}") as {
            clicks: number,
            booster: number
            xp: number
            level: number
            money: number
            upgrades: {
                patty: number
                cheese: number
                lettuce: number
            },
            upgradeDisplay: string[]
        };
    }

    set(data: { clicks?: number, booster?: number, xp?: number, level?: number, money?: number, upgrades?: { patty: number, cheese: number, lettuce: number }, upgradeDisplay?: string[] }) {
        localStorage.setItem("bc-save", JSON.stringify({ ...this.get(), ...data }));
    }
}

export default (new Storage());