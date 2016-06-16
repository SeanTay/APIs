// initial API call
$(document).ready( function() {
  $("button").click(function(){
    // Insert API call here...
    var keyword = $('input#keyword').val();
    console.log(keyword);
    var url = "http://omdbapi.com/?t="+keyword

    $.ajax({
      url: url,
      type: "GET",
      dataType: "json"
    }).done(function(response){
          console.log(response)
          var imgURL = "<img src=" + response.Poster + "></img> <br>";
          var title = "<h3> Title: " + response["Title"] + "</h3> <br>";
          var actors = "<h3> Actors: " + response["Actors"] + "</h3> <br>";
          var plot = "<h3> Plot: " + response ["Plot"] + "</h3>";
          // $("#main-content").css("background-image","url('" + imgURL +"')")
          // $("img").attr("src",imgURL);
          $(".img").empty();
          $(imgURL).appendTo($(".img"));

          $(".info").empty();
          $(title).appendTo($(".info"));
          $(actors).appendTo($(".info"));
          $(plot).appendTo($(".info"));

    }).fail(function(response){
      console.log("FAIL" + response);
    })

  });
});
