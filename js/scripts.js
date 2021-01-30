// TDD:


// Business Logic

function Pizza(size, toppings) {
  this.size = size,
  this.toppings = toppings,
  this.price = 0
}

Pizza.prototype.calculateSize = function(size) {
  if (this.size === "small") {
    this.price += 12;
  } else if (this.size === "medium") {
    this.price += 16;
  } else {
    this.price += 20;
  }
}

Pizza.prototype.calculateToppings = function(toppings) {
  for (let i = 0; i < this.toppings.length; i++)
    this.price += 2;
};


//   if (this.size === "1") {
//     price += 12;
//   } else if (this.size === "2") {
//     price += 18;
//   } else if (this.size === "3") {
//     price += 24;
//   } 
//   for (let i=0; i < this.toppings.length; i++) {
//     price += 1;
//   }
//   this.price = price;
//   return price;
// }

// User Interface Logic

// let addToppings = [];

$(document).ready(function() {
  $("form#order-form").submit(function(event) {
  event.preventDefault();
  let toppingChoices = 
  
  let pizzaSize = parseInt($("input:radio[name=size]:checked").val());
  $("input:checkbox[name=topping]:checked").each(function() {
    addToppings.push($(this).val());
  })

  let userPizza = new Pizza(pizzaSize, addToppings);
  let pizzaCost = userPizza.calculatePrice()
  $("#showTotal").show().html("Your total pizza cost is $" + pizzaCost);
  });
});

