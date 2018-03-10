$(".button").on("click", function() {
    // $(".gif_ImagesSection").append(src.)
    var imgUrl = "assets/images/q9_sugarloaf.jpg";
    var $img = $("<img>").attr("src", imgUrl);  // Creates an element to hold the image
    $(".gif_ImageSection").append($img);
})