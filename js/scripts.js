function Pizza(name, size, sauce, meats, veggies, extras){
  this.name = name;
  this.size = size;
  this.sauce = sauce;
  this.meats = meats;
  this.veggies = veggies;
  this.extras = extras;
}

Pizza.prototype.toppings = function () {
var  total = (this.meats.length + this.veggies.length + this.extras.length);
return total;
};


Pizza.prototype.sizePrice = function() {
if(newPizza.size === "Small"){
  return 10;
} else if(newPizza.size === "Medium"){
  return 13;
} else if(newPizza.size === "Large"){
  return 15;
} else if(newPizza.size === "X-Large"){
  return 18;
}};

Pizza.prototype.price = function() {
  var totalToppings = 0
  console.log(totalToppings);
  console.log(newPizza.toppings()-2);
  if(newPizza.toppings()>2){
    totalToppings = (newPizza.toppings()-2);
    }
  return (newPizza.sizePrice() + totalToppings);
};

Pizza.prototype.namePizza = function(){
  if(newPizza.name === ""){
    return "Pizza - " + newPizza.size;
  } else {
    return newPizza.name
  }
}

$(document).ready(function() {
  $("form#order").submit(function(event) {
      event.preventDefault();

      var size = $("#size").val();
      var sauce = $("#sauce").val();
      var pizzaName = $("#pname").val();


      var meatToppings = [];
      $.each($("input:checkbox[name=meat]:checked"), function(){
        meatToppings.push($(this).val());
      });
      var veggieToppings = [];
      $.each($("input:checkbox[name=veggie]:checked"), function(){
        veggieToppings.push($(this).val());
      });
      var extraToppings = [];
      $.each($("input:checkbox[name=extra]:checked"), function(){
        extraToppings.push($(this).val());
      });

      newPizza = new Pizza(pizzaName, size, sauce, meatToppings, veggieToppings, extraToppings);
      newPrice = newPizza.price();
      var pizzaTitle = newPizza.namePizza();


      $(".order-summary").show();
      $("#pizza-order").append("<li class='pizza-order-head'>" + pizzaTitle + " - $" + newPrice);

      $(".pizza-order-head").last().click(function(){
        $(".order-details").show();


      })

    });
});
