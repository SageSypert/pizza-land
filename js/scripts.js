// TDD:


// Business Logic

function Pizza(size, toppings, totalPizzaCost) {
  this.size = size;
  this.toppings = 0;
  this.totalPizzaCost = 0;
}

// Pizza.prototype.addSize = function(size) {
//   this.size = size;
// }

Pizza.prototype.calculateSizePrice = function(size) {
  if (this.size === "small") {
    this.totalPizzaCost += 12;
  } else if (this.size === "medium") {
    this.totalPizzaCost += 18;
  } else if (this.size === "large") {
    this.totalPizzaCost += 24;
  } else {
    alert("Please select a size");
  }
}
  

Pizza.prototype.addToppingsCost = function(toppings) {
  if (toppings === "pepperoni") {
    this.totalPizzaCost += 3;
  } else if (toppings === "olives") {
    this.totalPizzaCost += 2;
  } else if (toppings === "cheese") {
    this.totalPizzaCost += 1;
  } else {
    alert("Please select at least one topping");
  }
}




//   if (this.toppings <= 4) {
//     this.totalPizzaCost += 4;
//   } else if (this.toppings >= 5 && this.toppings <= 8) {
//     this.totalPizzaCost += 8;
//   } else if (this.toppings >= 9 && this.toppings <= 12) {
//     this.totalPizzaCost += 12;
//   } else {
//     alert("Please choose at least one option!");
//   }
// } 
  
  // for (let index=0; i < this.toppings.length; i++) {
  //   const threeDollarToppings = ["pepperoni", "salami", "bacon"];
  //   const twoDollarToppings = ["anchovies", "feta", "canadian bacon", "basil"]
  //   const oneDollarToppings = ["olives", "pineapple", "mushrooms", "garlic"]

// User Interface Logic
let newPizza = new pizzaOrder();

$(document).ready(function() {
  $("form#order-form").submit(function(event) {
    event.preventDefault();
    let userPizza = new Pizza();
    let inputSize = $("input:radio[name=size]:checked").val();
    userPizza.addSize(inputSize);
    $("input:checkbox[name=topping]:checked").each(function() {
      let inputTopping = $(this).val();
      userPizza.addToppingsCost(inputTopping);
    });


  });
});
