# _PizzaLand Project_

#### _Week 4 Epicodus Independent Project: A pizza ordering form using object-oriented JavaScript_

#### By _Sage Sypert_

## Technologies Used

* _HTML_          
* _CSS_
* _JavaScript_
* _jQuery 3.5.1_
* _Bootstrap_
* _GitHub_
* _Git Bash_
* _Visual Studio Code_

## Description

_This is a basic webpage that will allow you to "order" a pizza by selecting a size, one or more toppings, and then see the final cost of that pizza. This webpage was created to fulfill the independent project requirements for my fourth week at Epicodus._

## Setup/Installation Requirements

* _To view this webpage, follow this [link](https://sagesypert.github.io/pizza-land/) in a modern browser_
* _You can also use git to make a copy of this project with your terminal by inputting the following commands:  $ cd directory (of your choice), then:  $ git clone https://github.com/sagesypert/mr-robogers-neighborhood.git_
* _Remove all remotes pointing to my directory by typing:  $ git remote rm origin_
* _Add your own remote repository by typing:  $ git remote add (location nickname) followed by your repository's URL_
* _Access your copied files wherever you prefer to code! You can do this by typing in your terminal:  $ code ._

## Specifications

**Describe:** Pizza()
**Test:** Creates pizza object before size and topping choices are applied
**Code:** let userPizza = new Pizza();
**Expect:** (Pizza.toEqual(Pizza{ [],}));

**Describe:** Pizza.prototype.calculateSize
**Test:** It will add up total cost of a pizza depending on what size the user selects from the base cost of zero.
**Code:** pizza.calculateSize();
**Expect:** (Pizza.pizzaPrice["large"].toEqual([totalCost + 10]));

**Describe:** Pizza.prototype.calculateToppings
**Test:** It will add $2 for each counted index in the toppings array.
**Code:** pizza.calculateToppings();
**Expect:** (Pizza.pizzaPrice.toppings["mushrooms"].toEqual([2]));

## Known Bugs

* _No Known Issues_

## License

_MIT License_

Copyright (c) 2021 Sage Sypert

## Contact Information

_Sage Sypert <sage.sypert@gmail.com>