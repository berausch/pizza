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
var total = 0;
Pizza.prototype.orderTotal = function(){
return total += newPizza.price();
}

Pizza.prototype.allToppings = function(){
  return newPizza.meats.join(", ") + newPizza.veggies.join(", ") + newPizza.extras.join(", ");
}

$(document).ready(function() {

  $(".show-make").click(function(){
    $(".make-pizza").toggle();
  });


  $("form#order").submit(function(event) {
      event.preventDefault();
      $("button").text("Add Another Pizza");

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
      newTotal = newPizza.orderTotal();

      $(".order-summary").show();
      $("#pizza-order").append("<li class='pizza-order-head'>" + pizzaTitle + " - $" + newPrice);
      $("#entire-order-total").empty().append(" $" + newTotal);

      $(".pizza-order-head").last().click(function(){
        $(".order-details").show();
        $("#pizza-name").text(pizzaTitle);
        $("#order-size").text(newPizza.size);
        $("#order-sauce").text(newPizza.size);
        $("#order-sauce").text(newPizza.allToppings());
      });
      $("#pname").val("");
    });
});
