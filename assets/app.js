
var topics = ["snow", "rain", "Oh Brother", "LOL", "disney"];

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
            var gifDivStill = $("<div class='gif' data-state='still'>");
            // var gifDivAnimate = $("<div class='gif' data-state='animate'>");

            var rated = response.data[j].rating;   
            var $rated = $("<p>").text("Rating: " + rated);                     
            
            var imgUrlStill = response.data[j].images.fixed_width_still.url;
            var $imgStill = $("<img>").attr("src", imgUrlStill);

            // var imgUrlAnimate = response.data[j].images.fixed_width.url;
            // var $imgAnimate = $("<img>").attr("src", imgUrlAnimate);


            gifDivStill.append('<hr>', $rated, $imgStill);
            // gifDivAnimate.append('<hr>', $rated, $imgAnimate);

            $("#gif_ImageSection").append(gifDivStill);
            // $("#gif_ImageSection").append(gifDivAnimate);
        };

        $(document).on("click", ".gif", function() {
            console.log("click registered");

            var state = $(this).attr("data-state");
        
            if (state === "still") {
                // imgUrl = response.data[j].images.fixed_width.url;
                // $img = $("<img>").attr("src", imgUrlAnimate);
                // gifDiv.append('<hr>', $rated, $img);
                // $(this).html(gifDiv);
                // $("#gif_AnimateSection").show(this);
                
                $(this).attr("data-state", "animate"); console.log(state);
            } else {
                $(this).attr("data-state", "still"); console.log(state);
            }
        });

    });
};

// function gifState() {  

// };

$("#add-topic").on("click", function(event) {
    event.preventDefault();

    var topic = $("#topic-input").val().trim();
    topics.push(topic);

    $("input[type=text]").val("");
    renderButtons();
})


$(document).on("click", ".topicButton", displayTopicGif);

renderButtons();