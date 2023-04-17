import Charter, {Bowerman, Swordsman, Magician, Daemon, Undead, Zombie} from "../app";

test ('Charter', () => {
    const result = new Charter('Леголас', 'Bowerman');
    expect(result.name).toBe('Леголас'),
    expect(result.type).toBe('Bowerman'),
    expect(result.health).toBe(100),
    expect(result.level).toBe(1);
})

test ('Bowerman', () => {
    const result = new Bowerman('Леголас', 'Bowerman');
    expect(result).toEqual({name:'Леголас', type:'Bowerman', health:100, level:1, attack:25, defence:25})
})

test ('Swordsman', () => {
    const result = new Swordsman('Арагорн', 'Swordsman');
    expect(result).toEqual({name:'Арагорн', type:'Swordsman', health:100, level:1, attack:40, defence:10})
})

test ('Magician', () => {
    const result = new Magician('Гэндальф', 'Magician');
    expect(result).toEqual({name:'Гэндальф', type:'Magician', health:100, level:1, attack:10, defence:40})
})

test ('Daemon', () => {
    const result = new Daemon('Саурон', 'Daemon');
    expect(result).toEqual({name:'Саурон', type:'Daemon', health:100, level:1, attack:10, defence:40})
})

test ('Undead', () => {
    const result = new Undead('Нежить', 'Undead');
    expect(result).toEqual({name:'Нежить', type:'Undead', health:100, level:1, attack:25, defence:25})
})

test ('Zombie', () => {
    const result = new Zombie('Зомби', 'Zombie');
    expect(result).toEqual({name:'Зомби', type:'Zombie', health:100, level:1, attack:40, defence:10})
})

test ('checkName', () => {
    function result(){
       return new Charter('v', 'Zombie')
    } 
    expect(result).toThrow()
})

test ('checkType', () => {
    function result(){
        return new Charter('Granny', 'Grandmother')
    }
    expect(result).toThrow()
})