"use strict";

//TODO: CONVERT TO VANILLA JS

$(window).on("scroll", function() {
    var foldShadow = $(".fold-shadow");
    // Fold shadow animations onscroll
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
        $(foldShadow).addClass("disappear");
    } else {
        $(foldShadow).removeClass("disappear");
    }
    // Project nav animations onscroll
    var projectNav = $(".back-btn");
    // console.log(scroll);

    var footer = document.querySelector('footer');
    // var footerLocal = footer.scrollTop();
    // 1158 store
    // 978 pumello
    // 1056 personal
    // 1740 b2b
    if (scroll >= 75) {
        $(projectNav).addClass("appear");
    } else {
        $(projectNav).removeClass("appear");
    }
});
// Progress-bar animation
var progressBar = $('.progress-bar-graph div');
for (var i = 0; i < progressBar.length; i++) {
    $(progressBar[i]).appear(function() {
        var percent = $(this).find('span').attr('data-width');
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

// mobile nav animation and ui
const nav = document.querySelector('nav');
const navPullTab = nav.querySelector('.pull-tab');
const navItems = nav.querySelector('ul');

function handleNavClick() {
    nav.classList.toggle('nav--open');
}

navPullTab.addEventListener('click', handleNavClick, false);
navItems.addEventListener('click', handleNavClick, false);