// TDD:


// Business Logic

function Pizza() {
  this.size = size,
  this.toppings = [],
  this.totalPizzaCost = 0
}

Pizza.prototype.addSize = function(size) {
  this.size = size;
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
}

Pizza.prototype.calculatePrice = function() {
  if (this.size === "small") {
    this.price += 12;
  } else if (this.size === "medium") {
    this.price += 18;
  } else if (this.size === "large") {
    this.price += 24;
  }
  for (let index=0; i < this.toppings.length; i++) {
    const threeDollarToppings = ["pepperoni", "salami", "bacon"];
    const twoDollarToppings = ["anchovies", "feta", "canadian bacon", "basil"]
    const oneDollarToppings = ["olives", "pineapple", "mushrooms", "garlic"]
  }

  




// User Interface Logic

$(document).ready(function() {
  $("form#order-form").submit(function(event) {
