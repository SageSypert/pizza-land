// Business Logic

//Create object constructor for pizza
function Pizza() {
  this.size = size;
  this.toppings = [];
  this.toppingsCost = 0;
  this.sizeCost = 0;
  this.totalPizzaCost = 0;
}

// Determine cost of user's pizza based on size

Pizza.prototype.addSize = function(size) {
  this.size = size;
  if (this.size === "small") {
    this.sizePrice = 10;
  } else if (this.size === "medium") {
    this.sizePrice === 15;
  } else {
    this.sizePrice = 20;
  }
  this.calculateTotal();
}







// User Interface Logic

$(document).ready(function() {

})