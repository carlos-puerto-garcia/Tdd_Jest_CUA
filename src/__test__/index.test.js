const calc = require('../index');
const taller=calc.taller;
const taller2=calc.taller2;
const sumar=calc.sumar;
const sumar2=calc.sumar2;
describe('Modulo Calculadora', () => {

	  describe('sumar', () => {
  	it('deberia sumar 2 numeros',() => {
  		const initialvalueA=2;
  		const initialvalueB=4;
  		const expectedsum=6;


  		const result= sumar(initialvalueA,initialvalueB);
  		expect(result).toEqual(expectedsum);
  	});	
  	});

  
describe ('taller',()=>{
  it('Deberia dividir',()=>{
    expect(taller(8,2)).toBe(4);    
  });
});

 describe('sumar2',()=>{
  	it('deberia sumar tambien pero con sintaxis reducida',()=>{
  		expect(sumar2(7,3)).toBe(10);
  	});
  });

describe ('taller2',()=>{
  it('Deberia devolver el vector',()=>{
    expect(taller2(1,2,3)).toEqual([1,2,3]);    
  });
});
});
