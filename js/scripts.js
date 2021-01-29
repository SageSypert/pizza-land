// TDD:


// Business Logic

function Pizza() {
  this.size = size;
  this.toppings = [];
  this.totalPizzaCost = 0;
}

Pizza.prototype.addSize = function(size) {
  this.size = size;
}

Pizza.prototype.calculateSizePrice = function() {
  if (this.size === "small") {
    this.totalPizzaCost += 12;
  } else if (this.size === "medium") {
    this.totalPizzaCost += 18;
  } else if (this.size === "large") {
    this.totalPizzaCost += 24;
  } else {
    alert("Please select size")
  }
}
  
Pizza.prototype.addTopping = function() {
  if (this.toppings === "olives" || "pineapple" || "mushrooms" || "garlic" || "cheese") {
    this.totalPizzaCost += 1;
  } else if (this.toppings === "anchovies" || "feta" || "canadian bacon" || "basil") {
    this.totalPizzaCost += 2;
  } else if (this.toppings === "pepperoni" || "salami" || "bacon") {
    this.totalPizzaCost += 3;
  } else {
    alert("Please choose at least one topping")
  }
}
  
  // for (let index=0; i < this.toppings.length; i++) {
  //   const threeDollarToppings = ["pepperoni", "salami", "bacon"];
  //   const twoDollarToppings = ["anchovies", "feta", "canadian bacon", "basil"]
  //   const oneDollarToppings = ["olives", "pineapple", "mushrooms", "garlic"]

// User Interface Logic

$(document).ready(function() {
  $("form#order-form").submit(function(event) {
