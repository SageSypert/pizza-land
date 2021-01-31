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
  for (let i = 0; i < this.toppings.length; i++) {
    this.price += 2;
  }
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