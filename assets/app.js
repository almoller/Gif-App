
var topics = ["snow", "rain", "Oh Brother", "LOL", "disney"];

//Create Buttons
function renderButtons() {
    $("#buttonSection").empty();

    for (var i = 0; i < topics.length; i++) {
        var a = $("<button>");
        a.addClass("topicButton");
        a.attr("data-name", topics[i]);
        a.text(topics[i]);
        $("#buttonSection").append(a);
    };
};

// Get and display gifs 
function displayTopicGif() {
    $("#gif_ImageSection").empty();

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

            var imgUrlStill = response.data[j].images.fixed_width_still.url;
            var $imgStill = $("<img>").attr("src", imgUrlStill);

            var imgUrlAnimate = response.data[j].images.fixed_width.url;
            var $imgAnimate = $("<img>").attr("src", imgUrlAnimate);

            gifDiv.attr("data-state", "still");
            gifDiv.attr("data-state-still", imgUrlStill);
            gifDiv.attr("data-state-animate", imgUrlAnimate);
            gifDiv.append('<hr>', $rated, $imgStill);

            $("#gif_ImageSection").append(gifDiv);
        };
    });
};

// function to change the gif url between the animated and still versions
function gifState() {
    var state = $(this).attr("data-state");
    var animate = $(this).attr("data-state-animate");
    var still = $(this).attr("data-state-still");

    if (state === "still") {
        $(this).find("img").attr("src", animate);
        $(this).attr("data-state", "animate");
    } else {
        $(this).find("img").attr("src", still);
        $(this).attr("data-state", "still");
    };
};

// Make gifs clickable and change it to animated version when clicked
$(document).on("click", ".gif", gifState)

// make "submit topic" button functional
$("#add-topic").on("click", function (event) {
    event.preventDefault();

    var topic = $("#topic-input").val().trim();
    topics.push(topic);

    $("input[type=text]").val("");
    renderButtons();
})

// make topic buttons functional
$(document).on("click", ".topicButton", displayTopicGif);

renderButtons();