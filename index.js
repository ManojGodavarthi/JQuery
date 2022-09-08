
console.log($('h1').css('color'));
console.log($('h1').css('fontSize'));
console.log($('h1').css('fontWeight'));
//css("getting the value" , "setting the value")
$('h1').css('color','red');
//The add class method is used to add a class to the html element using jquery
//syntax: $(selector).addClass("className")
$('#para1').addClass("big-title");
//similarly we also remove the class using the removeClass() method.
//$('p').removeClass('big-title');

//adding multiple classes using the addClass() method
$('#para2').addClass('new-styles');
//hasClass() - return a boolen value
console.log($('#para2').hasClass('new-styles'));
console.log($('#para3').hasClass('new-styles'));
