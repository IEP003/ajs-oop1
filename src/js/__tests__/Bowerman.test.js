import Bowerman from '../Bowerman'

test ('Тест класса Bowerman', () => {
    const result = new Bowerman('Леголас', 'Bowerman');
    const expected = {
        name:'Леголас', 
        type:'Bowerman', 
        health:100, 
        level:1, 
        attack:25, 
        defence:25
    };
    expect(result).toEqual(expected);
})