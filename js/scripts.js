// TDD:


// Business Logic

function Pizza(size, toppings, price) {
  this.size = size;
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
  this.totalToppings = topping1 + topping2 + this.topping3;
  this.price = 0;
}

Pizza.prototype.calculatePrice = function(price, toppings) {
  if (this.size === "small") {
    this.price += 12;
  } else if (this.size === "medium") {
    this.price += 18;
  } else if (this.size === "large") {
    this.price += 24;
  } else {
    alert("Please select a size");
  }
  for (let i=0; i < this.toppings.length; i++) {
    this.price += 1;
  }
  this.price = price;
  return price;
}

// User Interface Logic

let addToppings = [];

$(document).ready(function() {
  $('form#order-form').submit(function(event) {
  event.preventDefault();
  
  let pizzaSize = $("input:radio[name=size]:checked").val();
  $("input:checkbox[name=topping]:checked").each(function() {
    addToppings.push($(this).val());
  })

  let userPizza = new Pizza(pizzaSize, addToppings);
  let pizzaCost = userPizza.calculatePrice()
  $("#showTotal").show().html("Your total pizza cost is $" + pizzaCost);
  });
});

