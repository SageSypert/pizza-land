// Outline

//Create pizza parlor site with the below functionality:
//User can choose one or more individual toppings
//User can choose a pizza size
//Return the final pizza cost

//Create a pizza object constructor with properties for toppings and size
//Create a prototype method for the cost of a pizza depending on selections chosen


// Business Logic

function Pizza(customerName, toppings, size) {
  this.customerName = customerName;
  this.toppings = toppings;
  this.size = size;
  this.baseCost = 10;
}

Pizza.prototype.pizzaCost = function() {

}








// User Interface Logic

$(document).ready(function() {

  
}

const size = $("input:radio[name=topping]:checked").val();