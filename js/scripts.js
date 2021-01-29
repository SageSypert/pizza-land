// Business Logic

//Create object constructor for pizza
function Pizza() {
  this.size = size;
  this.toppings = [];
  // this.toppingsCost = 0;
  // this.sizeCost = 0;
  this.totalPizzaCost = 0;
}

Pizza.prototype.addSize = function(size) {
  this.size = size;
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
}

Pizza.prototype.calculatePrice = function() {
  if (this.size === "small") {
    this.price += 12;
  } else if (this.size === "medium") {
    this.price += 18;
  } else (this.size === "large") {
    this.price += 24;
  }



// Pizza.prototype.addSize = function(size) {
//   this.size = size;
//   if (this.size === "small") {
//     this.totalPizzaCost = 10;
//   } else if (this.size === "medium") {
//     this.totalPizzaCost === 15;
//   } else {
//     this.totalPizzaCost = 20;
//   }
// }






// User Interface Logic

$(document).ready(function() {

})