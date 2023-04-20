import Charter from "../Charter";

test ('Создание персонажа', () => {
    const result = new Charter('Леголас', 'Bowerman');
    const expected = {
        name:'Леголас', 
        type:'Bowerman', 
        health:100, 
        level:1  
    };
    expect(result).toEqual(expected);
})

test ('Имя не корректно', () => {
    expect(() => {
        return new Charter('v', 'Zombie')
    }).toThrow();
})

test ('Данный тип отсутствует', () => {
    expect(() => {
        return new Charter('Granny', 'Grandmother');
    }).toThrow();
})