// TDD:


// Business Logic

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.calculatePrice = function(price, toppings) {
  let price = 0;
  if (this.size !== 1 && this.size !==2 && this.size !==3) {
    alert("Please select a size and try again");
    return price = 0;
  }
  if (this.size === "small") {
    price += 12;
  } else if (this.size === "medium") {
    price += 18;
  } else if (this.size === "large") {
    price += 24;
  }
  for (let i=0; i < this.toppings.length; i++) {
    price += 1;
  }
  this.price = price;
  return price;
}

// User Interface Logic



$(document).ready(function() {
  $('form#order-form').submit(function(event) {
  event.preventDefault();
  let pizzaSize = $("input:radio[name=size]:checked").val();
  console.log(pizzaSize)


    
  });
});

