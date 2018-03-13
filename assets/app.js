

var topics = ["snow", "rain", "Oh Brother", "LOL", "disney"];

function renderButtons() {
    $("#buttonSection").empty();

    for (var i = 0; i < topics.length; i++) {
        var a = $("<button>");
        a.addClass("topicButton");
        a.attr("data-name", topics[i]);
        a.text(topics[i]);
        $("#buttonSection").append(a);
    }
}

function displayTopicGif() {
    $("#starterImg").hide();

    var topic = $(this).attr("data-name");
    var key = "7wHvqslBWYbnRRNpNRV73m1WyvYdKXRo";
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + key
        + "&q=" + topic + "&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        for (var j = 0; j < response.data.length; j++) {
            var gifDiv = $("<div class='gif'>");

            var rated = response.data[j].rating;   
            var $rated = $("<p>").text("Rating: " + rated);   
            
            var imgUrl = response.data[j].images.fixed_width_still.url;
            var $img = $("<img>").attr("src", imgUrl);

            gifDiv.append('<hr>', $rated, $img);

            $("#gif_ImageSection").append(gifDiv);
        };

    });
};

$(document).on("click", ".topicButton", displayTopicGif);

renderButtons();