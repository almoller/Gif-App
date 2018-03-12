

var topics = ["snow", "rain", "Oh Brother", "LOL", "disney"];

function renderButtons() {
    $("#buttonSection").empty;

    for (var i = 0; i < topics.length; i++) {
        var a = $("<button>");
        a.addClass("topicButton");
        a.attr("data-name", topics[i]);
        a.text(topics[i]);
        $("#buttonSection").append(a);
    }
}

function displayTopicGif () {

    alert("BOO!");// $(".gif_ImagesSection").append(src.)
    var imgUrl = "assets/images/q9_sugarloaf.jpg";
    var $img = $("<img>").attr("src", imgUrl);  // Creates an element to hold the image
    $("#gif_ImageSection").append($img);


};

$(document).on("click", ".topicButton", displayTopicGif);

renderButtons();