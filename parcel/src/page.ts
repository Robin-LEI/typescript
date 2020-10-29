import $ from 'jquery';

$(function() {
  console.log(1222)
  $('body').html('<div>123</div>');
  console.log(new $.fn.init())
});