// TDD:


// Business Logic

function Pizza(size, toppings, totalPizzaCost) {
  this.size = size;
  this.meat = meat;
  this.toppings = toppings;
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

// User Interface Logic

$(document).ready(function() {
  $("form#order-form").submit(function(event) {
    event.preventDefault();
    
    let newPizza = new Pizza(inputtedSize, inputtedTopping);
    const inputtedSize = $("input:radio[name=size]:checked").val();
    newPizza.addSize(inputSize);

  $("input:checkbox[name=topping]:checked").each(function() {
    let inputtedTopping = $(this).val();
    newPizza.addToppingsCost(inputTopping);
  });
    
  });
});

