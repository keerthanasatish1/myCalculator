let convert = require('../calculator.js');
let assert = require('assert');
describe('non numerical value', function(){
    		it('a+5 the first value a is not a numerical value', function() {
    			assert.equal(undefined, my_calculator("+", 'a', 5));
    		});
                it('5+a the second value a is not a numerical value', function() {
    			assert.equal(undefined, my_calculator("-", 5, 'a'));
    		});
 		it('a+b both values are not numerical values', function() {
    			assert.equal(undefined, my_calculator("+", 'a', 'b'));
    		});
                it('-+2 two operators and a number', function() {
    			assert.equal(undefined, my_calculator("-", '+', '2'));
    		});
                 it('122 Missing operator', function() {
    			assert.equal(undefined, my_calculator("1", '2', '2'));
    		});
                 it('5+null Missing operand', function() {
    			assert.equal(undefined, my_calculator("+", '5', 'null'));
    		});
                it('(5+4)/2 more operands',function(){
                assert.equal(undefined, my_calculator("+", (5+4)/2));
  });
	});
describe('basic addition , subtraction, multiplication and division', function() {
	describe('Addition ', function(){
    		it('4+6 should equal 10', function() {
    			assert.equal(10, my_calculator("+", 4, 6));
    		});
        	it('0+3 should equal 3', function() {
    			assert.equal(3, my_calculator("+", 0, 3));
    		}); 
		it('3+0 should equal 3', function() {
    			assert.equal(3, my_calculator("+", 3, 0));
    		});
		it('(-3)+6 should equal 3', function() {
    			assert.equal(3, my_calculator("+", -3, 6));
    		});
                it('(-3)+(-6) should equal -9', function() {
    			assert.equal(-9, my_calculator("+", -3, -6));
    		});
		it('3+(-6) should equal -3', function() {
    			assert.equal(-3, my_calculator("+", 3, -6));
    		});		
	});
	describe(' subtraction ', function(){
    		it('5-3 should equal 2', function() {
    			assert.equal(2, my_calculator("-", 5, 3));
    		});
                it('3-5 should equal -2', function() {
    			assert.equal(-2, my_calculator("-", 3, 5));
    		});
        	it('9-0 should equal 9', function() {
    			assert.equal(9, my_calculator("-", 9, 0));
    		}); 
		it('0-9 should equal -9', function() {
    			assert.equal(-9, my_calculator("-", 0, 9));
    		});
		it('(-3)-(-6) should equal 3', function() {
    			assert.equal(3, my_calculator("-", -3, -6));
    		});
                it('(-3)-6 should equal -9', function() {
    			assert.equal(-9, my_calculator("-", -3, 6));
    		});
                it('3-(-6) should equal 9', function() {
    			assert.equal(9, my_calculator("-", 3, -6));
    		});
	});
	describe(' Multiplication', function(){
    		it('2*6 should equal 12', function() {
    			assert.equal(12, my_calculator("*", 2, 6));
    		});
        	it('9*0 should equal 0', function() {
    			assert.equal(0, my_calculator("*", 9, 0));
    		}); 
		it('0*9 should equal 0', function() {
    			assert.equal(0, my_calculator("*", 0, 9));
    		});
		it('(-5)*(-6) should equal 30', function() {
    			assert.equal(30, my_calculator("*", -5, -6));
    		});
		it('(-5)*6 should equal -30', function() {
    			assert.equal(-30, my_calculator("*", -5, 6));
    		});
                it('5*(-6) should equal -30', function() {
    			assert.equal(-30, my_calculator("*", 5, -6));
    		});
                it('999999999999 * 9999999999999 should equal 9.999999999998e+25 ', function(){
                        assert.equal(9.999999999998e+25, my_calculator("*", 9999999999999, 9999999999999));
                });
	}); 
       describe('Division ', function(){
    		it('9/6 should equal 1.5', function() {
    			assert.equal(1.5, my_calculator("/", 9, 6));
    		});
        	it('9/0 can not divide by 0', function() {
    			assert.equal(undefined, my_calculator("/", 9, 0));
    		}); 
		it('0/9 should equal 0', function() {
    			assert.equal(0, my_calculator("/", 0, 9));
    		});
		it('(-12)/(-6) should equal 2', function() {
    			assert.equal(2, my_calculator("/", -12, -6));
    		});
		it('(-15)/6 should equal -2.5', function() {
    			assert.equal(-2.5, my_calculator("/", -15, 6));
    		});
		it('(6)/(-9) should equal -0.6666666666666666', function() {
    			assert.equal(-0.6666666666666666, my_calculator("/", 6, -9));
    		});                

	}); 
        
       describe('undefined operator ', function(){
		it('+ is a valid operator', function() {
    			assert.equal(8, my_calculator("+", 2, 6));
    		});
		it('- is a valid operator', function() {
    			assert.equal(3, my_calculator("-", 9, 6));
    		});         
		it('* is a valid operator', function() {
    			assert.equal(12, my_calculator("*", 2, 6));
    		});
		it('/ is a valid operator', function() {
    			assert.equal(3, my_calculator("/", 9, 3));
    		});
           	it('% is not a valid operator', function() {
    			assert.equal(undefined, my_calculator("%", 9, 6));
    		});
                it('| is not a valid operator', function() {
    			assert.equal(undefined, my_calculator("|", 9, 6));
    		});
                 it('v is not a valid operator', function() {
    			assert.equal(undefined, my_calculator("v", 2, 6));
    		});
                 it('^  is not a valid operator', function() {
    			assert.equal(undefined, my_calculator("^", 2, 3));
    		});
               
       });
  	
  
});