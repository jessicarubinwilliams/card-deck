$(document).ready(function() {
  $("#getCards").submit(function(event) {
    event.preventDefault();
    const suitsArray = ["Hearts", "Diamonds", "Clubs", "Spades"];
    const ranksArray = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];
    suitsArray.forEach(function(suit) {
      ranksArray.forEach(function(rank){
        card = rank + " of " + suit;
        $("#output").append("<li>" + card + "</li>");
      });
    });
  });
});