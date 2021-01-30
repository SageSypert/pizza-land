// TDD:


// Business Logic

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.calculatePrice = function(price, toppings) {
  if (this.size === "1") {
    price += 12;
  } else if (this.size === "2") {
    price += 18;
  } else if (this.size === "3") {
    price += 24;
  } else {
    alert("Please select a size");
  }
  for (let i=0; i < this.toppings.length; i++) {
    price += 1;
  }
  this.price = price;
  return price;
}

// User Interface Logic

let addToppings = [];

$(document).ready(function() {
  $('form#order-form').submit(function(event) {
  event.preventDefault();
  
  let pizzaSize = parseInt($("input:radio[name=size]:checked").val());
  $("input:checkbox[name=topping]:checked").each(function() {
    addToppings.push($(this).val());
  })

  let userPizza = new Pizza(pizzaSize, addToppings);
  let pizzaCost = userPizza.calculatePrice()
  $("#showTotal").show().html("Your total pizza cost is $" + pizzaCost);
  });
});

