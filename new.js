//Manuplating text with jQuery
//The text() method is used to mauplate the text
$('h1').text('hello');
//applying text() function on buttons
$('button').text("Don't click me");

//Adding html element in jQuery
//using the html() method
$('button').html("<em>hey</em>");
$('div').html("<input type='text'/>");
$('input').text("enter your name");
$('a').text('google');

//manuplating attributes using jquery
//getting the value of source attribute
console.log($('img').attr('src'));
console.log($('img').attr('alt'));
console.log($('a').attr('href'));
console.log($('a').hasOwnProperty('href'));

//setting attribute values
$('a').attr('href','https://www.yahoo.com');
console.log($('h1').attr('class'));
console.log($('button').attr('class'));
