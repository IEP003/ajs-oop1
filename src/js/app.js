export default class Charter {
    constructor(name, type){
        if (name.length < 2 || name.length > 10){
            throw new Error('error')
        };
        const arrType = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
        if (arrType.indexOf(type) === -1){
            throw new Error('error')
        }
        this.name = name,
        this.type = type,
        this.health = 100,
        this.level = 1;
    }
}

export class Bowerman extends Charter {
    constructor (name, type){
        super(name, type)
        this.attack = 25,
        this.defence = 25;
    }
}

export class Swordsman extends Charter {
    constructor (name, type){
        super(name, type)
        this.attack = 40,
        this.defence = 10;
    }
}

export class Magician extends Charter {
    constructor (name, type){
        super(name, type)
        this.attack = 10,
        this.defence = 40;
    }
}

export class Daemon extends Charter {
    constructor (name, type){
        super(name, type)
        this.attack = 10,
        this.defence = 40;
    }
}

export class Undead extends Charter {
    constructor (name, type){
        super(name, type)
        this.attack = 25,
        this.defence = 25;
    }
}

export class Zombie extends Charter {
    constructor (name, type){
        super(name, type)
        this.attack = 40,
        this.defence = 10;
    }
}

