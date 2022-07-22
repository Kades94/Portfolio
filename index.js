$(document).ready(function() {
    $(this).scrollTop(0);
});

$(window).scroll(function(event) {    
    var scroll = $(window).scrollTop();

    if (scroll <= 752) {
        $(".navlink i").removeClass("hide");
        $(".fa-home").addClass("hide");
        $(".navlink b").removeClass("showText");
        $(".navHome").addClass("showText");
    } 
    else if(scroll <= 1490){
        $(".navlink i").removeClass("hide");
        $(".fa-user").addClass("hide");
        $(".navlink b").removeClass("showText");
        $(".navUser").addClass("showText");
    }
    else if (scroll <= 2228) {
        $(".navlink i").removeClass("hide");
        $(".fa-code").addClass("hide");
        $(".navlink b").removeClass("showText");
        $(".navCode").addClass("showText");
    } 
    else if(scroll <= 2971){
        $(".navlink i").removeClass("hide");
        $(".fa-laptop").addClass("hide");
        $(".navlink b").removeClass("showText");
        $(".navLaptop").addClass("showText");
    }
    else if(scroll > 2971){
        $(".navlink i").removeClass("hide");
        $(".fa-envelope").addClass("hide"); 
        $(".navlink b").removeClass("showText"); 
        $(".navEnvelope").addClass("showText");
    }

});



