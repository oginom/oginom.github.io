$(function(){
  $('p').click(function(){
    //$(this).text('clicked');
    $(this).css('background-color', '#ffff00');
  });
  $('#bg').vegas({
    slides:[
      {src:'res/p1.jpg'},
      {src:'res/p2.jpg'},
      {src:'res/p3.jpg'},
      {src:'res/p4.jpg'}
    ],
    timer:false,
    delay:8000,
    overlay:true
  });
  //$(".thumbnail").hover(function () {
  //  $(this).children("video")[0].play();
  //}, function () {
  //  var el = $(this).children("video")[0];
  //  el.pause();
  //  el.currentTime = 0;
  //});
  $(".thumbnail").click(function () {
    var el = $(this).children("video")[0];
    if(el.paused) {
      el.play();
    } else {
      el.pause();
      el.currentTime = 0;
    }
  });
});

