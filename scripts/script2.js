

$("#show-index").click(function() {
    $(".index-description-title.introduction").show();
    $("#selected-artwork").show();
    $("#selected-clientwork").show();
    $("#homepage").hide();
    $("#information").hide();
});

$("#show-homepage").click(function() {
    $("#homepage").show();
    $(".index-description-title.introduction").hide();
    $("#selected-artwork").hide();
    $("#selected-clientwork").hide();
    $("#information").hide();
});

$("#show-information").click(function() {
    $(".index-description-title.introduction").show();
    $("#information").show();
    $("#selected-artwork").hide();
    $("#selected-clientwork").hide();
    $("#homepage").hide();
});