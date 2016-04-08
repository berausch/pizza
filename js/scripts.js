function Pizza(size, sauce, meats, veggies, extras){
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




$(document).ready(function() {
  $("form#order").submit(function(event) {
      event.preventDefault();
      console.log("hi");

      var size = $("#size").val();
      var sauce = $("#sauce").val();

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

      newPizza = new Pizza(size, sauce, meatToppings, veggieToppings, extraToppings);
      console.log(newPizza);
      console.log(newPizza.toppings());
    });
});
