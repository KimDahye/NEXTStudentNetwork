$(".card").hover(function() {
    //alert("hi");
    $(this).find(".info").css("display","block");
}, function() {
    //alert("hello");
    $(this).find(".info").css("display","none");
});