// TDD:


// Business Logic

function Pizza(size, veggies, sauce, meat) {
  this.size = size;
  this.meat = meat;
  this.veggies = veggies;
  this.sauce = sauce;
  this.totalPizzaCost = 0;
}

Pizza.prototype.calculatePrice = function() {
  if (this.size === "small") {
    this.totalPizzaCost += 12;
  } else if (this.size === "medium") {
    this.totalPizzaCost += 18;
  } else if (this.size === "large") {
    this.totalPizzaCost += 24;
  } 

  this.veggies.forEach(val => {
    if (['olives', 'onion', 'spinach'].indexOf(val) != -1) {
      this.totalPizzaCost += 1
    } else if (['mushrooms', 'garlic', 'kalamata-olives'].indexOf(val) != -1) {
      this.totalPizzaCost += 2
    }
  });

  if (this.meat === "salami" || this.meat === "pepperoni" || this.meat === "chicken") {
    this.totalPizzaCost += 2.50
  } else if (this.meat === "canadian" || this.meat === "sausage") {
    this.totalPizzaCost += 3
  }

  if (this.sauce === "marinara" || this.sauce === "garlic") {
    this.totalPizzaCost += 1.50
  } else if (this.sauce === "buffalo" || this.sauce === "pesto") {
    this.totalPizzaCost += 2
  }

  return this.totalPizzaCost
}

// User Interface Logic

$(document).ready(function() {
  $('form#order-form').submit(function(event) {
  event.preventDefault();
    
    let veggies = [];
    $('input[name=veggies]:checked').each(function () {
      veggies.push($(this).val());
    });

    let size = $("#size").val();
    let meat = $("#meat").val();
    let sauce = $("#sauce").val();

    let userPizza = new Pizza(meat, veggies, sauce, size)
    
    userPizza = Pizza();
    confirmation = userPizza.calculatePrice();
    $('#confirmation').text("$" + confirmation)
  });
});

