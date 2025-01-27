function setActiveStyle(colorName){
    $('.alternate-style').attr("disabled", true);
    $(".alternate-style[title="+colorName+"]").removeAttr("disabled");
}


$('.toggle-style-switcher').click(function(){
    $('.style-switcher').toggleClass('open');
})