//for(var i=0;i<3;i++){
  //document.querySelectorAll('button')[i].addEventListener('click',function(){
    //document.querySelector('h1').style.color ="purple";
  //});
//}

$('button').click(function(){
  $('h1').css('color','red');
  $('h1').css('fontSize','5rem');
});

//event.target.value
//event.key
$('input').keypress(function(event){
  $('h1').text(event.key);
});
