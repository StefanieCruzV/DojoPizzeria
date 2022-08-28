function pizzaOven(crustType, sauceType, cheese, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}
    
var ppizaroni= pizzaOven("cauliflower", "buffalo", "monterrey", ["onion", "broccoli", "pepperoni","mushrooms"]);
console.log(ppizaroni);
var ppizahamm= pizzaOven("deep dish", "pesto", "monterrey", ["jam"]);
console.log(ppizaroni);

var pizza1=pizzaOven( "deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(pizza1);

var pizza2=pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"],["mushrooms", "olives", "onions"]);
console.log(pizza2);

function randomPizaa(){
    
}
