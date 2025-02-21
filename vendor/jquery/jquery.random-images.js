$(document).ready(function(){

var images=['img/2026_img001.jpg',
                'img/2026_img002.jpg',
                'img/2026_img003.jpg',
                'img/2026_img004.jpg',
                'img/2026_img005.jpg',
                'img/2026_img006.jpg',
                'img/2026_img007.jpg',
                'img/2026_img008.jpg'];

var randomNumber = Math.floor(Math.random() * images.length);
var bgImg = 'url(' + images[randomNumber] + ')';

$('header.masthead').css({'background-image':bgImg, 'background-size':'cover', 'background-position':'center'});

});