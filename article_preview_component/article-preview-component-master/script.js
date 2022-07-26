
$(function () {
  $('[data-toggle="popover"]').popover()
});

$("#open-share-div").popover({
    html: true,
    placement: "top",
    trigger: "click",
    content: function () {
        return $("#share").html();
    }
});

function toggleShareDiv() {
  if($(window).width() < 900)
    $('#open-share-div').click(function() {
      $('.share-footer').toggle("slide");
      $('#card-footer').toggle();
    });
}

function hideShareDiv() {
  if($(window).width() < 900)
    $('#share-footer').click(function() {
      $('#card-footer').toggle("slide");
      $('#share-footer').toggle();
    });
}

$(document).ready(function(){
  toggleShareDiv();
  hideShareDiv();
});

$(window).resize(function() {
  toggleShareDiv();
  hideShareDiv();
})
