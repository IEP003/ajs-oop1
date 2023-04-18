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