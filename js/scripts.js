

$(document).ready(function(){
  $('.roll').on('click',function(){
    return Math.floor(Math.random() * (7-1)+1);
});

console.log(Math.floor(Math.random(1) * (7-1)+1));
$('.score').text("" + Math.floor(Math.random(1) * (7-1)+1))
});