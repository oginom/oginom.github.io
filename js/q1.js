$(function(){
  $('p').click(function(){
    $(this).text('clicked');
    $('p').css('background-color', '#ffff00');
    $('body').vegas({
      slides:[
        {src:'res/p1.jpg'},
        {src:'res/p2.jpg'},
        {src:'res/p3.jpg'},
        {src:'res/p4.jpg'}
      ]
    });
  });
});

