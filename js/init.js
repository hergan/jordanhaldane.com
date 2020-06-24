/** *************Init JS*********************

    TABLE OF CONTENTS
	---------------------------
	1.
************************************* **/

"use strict";
/*****Load function start*****/

$(window).on("scroll", function() {
    var foldShadow = $(".fold-shadow");
    /*Fold shadow animations onscroll*/
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
        $(foldShadow).addClass("disappear");
    } else {
        $(foldShadow).removeClass("disappear");
    }
    /*Fold shadow animation onscroll*/
    /*Project nav shadow animations onscroll*/
    var projectNav = $(".back-btn");
    if (scroll >= 75) {
        $(projectNav).addClass("appear");
    } else {
        $(projectNav).removeClass("appear");
    }
    /*Project nav animation onscroll*/
});
// var jbh = function () {
/*Progressbar animation start*/
var progressBar = $('.progress-bar-graph div');
// console.log(progressBar);
// console.log(progressBar.length);
for (var i = 0; i < progressBar.length; i++) {
    console.log(progressBar[i]);
    $(progressBar[i]).appear(function() {
        var percent = $(this).find('span').attr('data-width');
        console.log(percent);
        var $endNum = parseInt($(this).find('.bar-wrap strong i').text(), 10);
        var $that = $(this);
        $(this).find('span').animate({
            'width': percent + '%'
        }, 1600, function() {});
        $(this).find('.bar-wrap strong').animate({
            'opacity': 1
        }, 1400);
        $(this).find('.bar-wrap strong i').countTo({
            from: 0,
            to: $endNum,
            speed: 1200,
            refreshInterval: 30,
            onComplete: function() {}
        });
        if (percent === '100') {
            $that.find('bar-wrap strong').addClass('full');
        }
    });
}
/*Progressbar animation end*/

$('.pull-tab').click(function() {
    $('nav').toggleClass('nav--open', 500);
    // $(this).toggleClass('pull-tab--open');
})

// }
$(document).on("ready", function() {
    /*jbh function init start*/
    // jbh();
    /*jbh function init end*/

    /*Preload anim start*/
    $('#la_anim').addClass('la-animate');
    /*Preload anim end*/
});