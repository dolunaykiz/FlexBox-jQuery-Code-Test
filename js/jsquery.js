$(document).ready(function(){
    $("#image-container").hover(
    //on mouseover
    function() {
    $("#text-expand").animate({
        height: '+=15%',
        maxHeight: '+=17%',
        bottom: '-=5%'
        }, 'slow'
    );
    $("#text-expand").css("backgroundColor", "#3873AF");
    },
    //on mouseout
    function() {
    $("#text-expand").animate({
        height: '15%',
        maxHeight: '13%',
        bottom: '-5%'
        }, 'slow'
    );
    $("#text-expand").css("backgroundColor", "#083758");
    }
);
$("#image-container2").hover(
    //on mouseover
    function() {
    $("#text-expand2").animate({
        height: '+=15%',
        maxHeight: '+=17%',
        bottom: '-=5%'
        }, 'slow'
    );
    $("#text-expand2").css("backgroundColor", "#3873AF");
    },
    //on mouseout
    function() {
    $("#text-expand2").animate({
        height: '15%',
        maxHeight: '13%',
        bottom: '-5%'
        }, 'slow'
    );
    $("#text-expand2").css("backgroundColor", "#083758");
    }
);
$("#image-container3").hover(
    //on mouseover
    function() {
    $("#text-expand3").animate({
        height: '+=15%',
        maxHeight: '+=17%',
        bottom: '-=5%'
        }, 'slow'
    );
    $("#text-expand3").css("backgroundColor", "#3873AF");
    },
    //on mouseout
    function() {
    $("#text-expand3").animate({
        height: '15%',
        maxHeight: '13%',
        bottom: '-5%'
        }, 'slow'
    );
    $("#text-expand3").css("backgroundColor", "#083758");
    }
);
$("#image-container4").hover(
    //on mouseover
    function() {
    $("#text-expand4").animate({
        height: '+=15%',
        maxHeight: '+=17%',
        bottom: '-=5%'
        }, 'slow'
    );
    $("#text-expand4").css("backgroundColor", "#3873AF");
    },
    //on mouseout
    function() {
    $("#text-expand4").animate({
        height: '15%',
        maxHeight: '13%',
        bottom: '-5%'
        }, 'slow'
    );
    $("#text-expand4").css("backgroundColor", "#083758");
    }
);
});