// Outline

//Create pizza parlor site with the below functionality:
//User can choose one or more individual toppings
//User can choose a pizza size
//Return the final pizza cost

//Create a pizza object constructor with properties for toppings and size
//Create a prototype method for the cost of a pizza depending on selections chosen


// Business Logic

function Pizza(customerName, toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.baseCost = 10;
}

// Pizza.prototype.pizzaCost = function() {
//   if (this)
// }








// User Interface Logic

$(document).ready(function() {
  $("form#toppings").submit(function(event) {
    event.preventDefault();
    $("input:checkbox[name=topping]:checked").each(function() {
      const toppings = $(this).val();
    });
    $("input:radio[name=size]:checked").val();
  });
});

// const size = $("input:radio[name=topping]:checked").val();