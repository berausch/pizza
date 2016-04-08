//business logic
function Ticket(movie, time, age) {
    this.movie = movie;
    this.time = time;
    this.age = age;
}

function Movie(title, rating, date, times) {
    this.title = title;
    this.rating = rating;
    this.date = date;
    this.times = times;
}

Ticket.prototype.price = function() {

    var price = 10

    if (this.age < 18) {
        price -= 2
    } else if (this.age >= 65) {
        price -= 3
    }
    console.log(this.age);
    console.log(price);
    if (this.time === "0") {
        price -= 3
    } else if (this.time === "1") {
        price -= 2
    } else if (this.time === "2") {
        price += 2
    }
    console.log(price);
    if (this.movie.date === "A") {
        price += 2
    } else if (this.movie.date === "C") {
        price -= 2
    }
    return price
};

Ticket.prototype.youth = function() {
    if (this.movie.rating === "R" && this.age < 18) {
        return false
    } else {
        return true
    }
}
Ticket.prototype.batmanSucks = function() {
  console.log(this.movie.title);
    if (this.movie.title === "Batman v Superman") {
        return false
    } else {
        return true
    }
}
$(document).ready(function() {
  var batman = new Movie("Batman v Superman", "PG-13", "A");
  var wtf = new Movie("Whiskey Tango Foxtrot", "R", "A");
  var allegiant = new Movie("The Divergent Series: Allegiant", "PG-13", "B");
  var zootopia = new Movie("Zootopia", "PG-13", "B");
  var deadpool = new Movie("Deadpool", "R", "C");
  var kungFu = new Movie("Kung Foo Panda 3", "G", "C");
  var cloverfield = new Movie("10 Cloverfield Lane", "R", "B");
  var movies = [batman, wtf, allegiant, zootopia, deadpool, kungFu, cloverfield];

  var newTicket;


    //user interface logic

    $("form#movie-ticket").submit(function(event) {
        event.preventDefault();
        $(".young").hide();
        $("#batman-sucks").hide();

        var inputtedTitle = parseInt($("#movie-title").val());
        var inputtedTime = $("#movie-time").val();
        var inputtedAge = $("#age").val();
        newTicket = new Ticket(movies[inputtedTitle], inputtedTime, inputtedAge);

        if(newTicket.batmanSucks() === false) {
          $("#batman-sucks").show();
        }
        else if (newTicket.youth() === true) {
                var newPrice = newTicket.price();
                $("#price").empty().append("$" + newPrice + " " + newTicket.movie.title);
                $("#age").val("");
            } else {
            $(".young").show();
        }
        console.log(newPrice);

    });
    $("form#batman-sucks").submit(function(event) {
        event.preventDefault();
        newTicket.movie = kungFu;
        var newPrice = newTicket.price();
        $("#price").empty().append("$" + newPrice + " " + newTicket.movie.title);
        $("#batman-sucks").hide();
    });
});
