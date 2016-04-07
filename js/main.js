$(document).ready( function() {

  $("#meow").click( function() {
    $("#animals").append("<img class='animal' src='images/flyingkitten.jpg' alt='Flying Kitten' />");
  });

  $("#snarf").click( function() {
    $("#animals").append("<img class='animal' src='images/snarf.jpg' alt='Snarf' />");
  });

  $(".animal").click(function() {
    this.css('visibility')
  })

});
