$(document).ready(function(){
var images=['img/001.jpg',
            'img/002.jpg',
            'img/003.jpg',
            'img/004.jpg',
            'img/005.jpg'];

var randomNumber = Math.floor(Math.random() * images.length);
var bgImg = 'url(' + images[randomNumber] + ')';

$('header.masthead').css({'background-image':bgImg, 'background-size':'cover', });

});