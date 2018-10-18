let convert = {};

var operatorArray = ["+", "-", "*", "/"];
var result;

my_calculator = function(operator, value1, value2){
     if(isNaN(value1)) return undefined;
     if(isNaN(value2)) return undefined;
   
   if((operatorArray.indexOf(operator)) == -1) return undefined;
   switch(operator) {
    case "+":
        if(value1 <= 0)
        {
            if(value2 <= 0)
		result = (value1*(-1)+value2*(-1)) *(-1);
            else
                result = value2-(value1*(-1));
        }
        else             
        	result = value1+value2;
        break;
    case "-":
        result = value1-value2;
        break;     
    case "*":
        result = value1*value2;
        break;
    case "/":
        if(value2==0)
        return undefined;
        result = value1/value2;
        break;
        
   }
    return result;   
} 

module.exports = convert;