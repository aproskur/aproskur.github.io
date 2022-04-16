//$(".nav-menu ul").hide();
//$(".dropdown").click(function () {
//$(this).parent(".nav-menu").children("ul").slideToggle("100");
//$(this).find(".arrow").toggleClass("arrow-up arrow-down");
//});


$(".nav-menu ul").hide();
$(".dropdown-features").click(function () {
$('#features').slideToggle("100");
$(this).find(".arrow").toggleClass("arrow-up arrow-down");
});

$(".dropdown-company").click(function () {
$('#company').slideToggle("100");
$(this).find(".arrow").toggleClass("arrow-up arrow-down");
});
