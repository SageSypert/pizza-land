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

Pizza.prototype.calculatePrice = function() {
  if (this.size === "small") {
    this.totalPizzaCost += 12;
  } else if (this.size === "medium") {
    this.totalPizzaCost += 18;
  } else {
    this.totalPizzaCost += 24;
  }
  if (this.toppings <= 4) {
    this.totalPizzaCost += 4;
  } else if (this.toppings >= 5 && this.toppings <= 8) {
    this.totalPizzaCost += 8;
  } else if (this.toppings >= 9 && this.toppings <= 12) {
    this.totalPizzaCost += 12;
  } else {
    alert("Please choose at least one option!");
  }
} 
  
  // for (let index=0; i < this.toppings.length; i++) {
  //   const threeDollarToppings = ["pepperoni", "salami", "bacon"];
  //   const twoDollarToppings = ["anchovies", "feta", "canadian bacon", "basil"]
  //   const oneDollarToppings = ["olives", "pineapple", "mushrooms", "garlic"]

// User Interface Logic

$(document).ready(function() {
  $("form#order-form").submit(function(event) {
    event.preventDefault();
    let toppings = parseInt($("#toppings").val());
  }
}
