// TDD:

// Describe: Pizza()
// Test: Creates pizza object before size and topping choices are applied
// Code: let userPizza = new Pizza();
// Expect: (Pizza.toEqual(Pizza{ [],}));

// Describe: Pizza.prototype.calculateSize
// Test: It will add up total cost of a pizza depending on what size the user selects from the base cost of zero.
// Code: pizza.calculateSize();
// Expect: (Pizza.pizzaPrice["large"].toEqual([totalCost + 10]));

// Describe: Pizza.prototype.calculateToppings
// Test: It will add $2 for each counted index in the toppings array.
// Code: pizza.calculateToppings();
// Expect: (Pizza.pizzaPrice.toppings["mushrooms"].toEqual([2]));

// Describe: 

// Business Logic:

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

// User Interface Logic:

$(document).ready(function() {
  $("form#order-form").submit(function(event) {
    event.preventDefault();

  let sizeChoice = $("input:radio[name=size]:checked").val();
  let toppingChoice = $("input:checkbox[name=pizzaTopping]:checked");
  let toppingsArray = [];

  toppingChoice.each(function() {
    toppingsArray.push($(this).val());
  })

  let userPizza = new Pizza (sizeChoice, toppingsArray);
  userPizza.calculateSize();
  userPizza.calculateToppings();

  $(".orderConfirmation").show();
  $("#sizeChoice").text(userPizza.size);

  let toppingString = (userPizza.toppings).join(", ");
  $("#toppingsChoice").text(toppingString);
  $("#costOutput").text("$" + userPizza.price);

  })
});