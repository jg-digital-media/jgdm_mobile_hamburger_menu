console.log("js-connected");

// Operates mobile hamburger menu  - hides on 981px or more width
$('.ham').on("click", function(){
    $('.main_menu').slideToggle(800);
    console.log("clicked");
});

