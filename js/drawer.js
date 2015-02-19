var timer = 0;

var before = document.getElementById('before'); 
var after = document.getElementById('after'); 

var ctxBefore = before.getContext('2d'); 
var ctxAfter = after.getContext('2d'); 

var originalImage = document.querySelector('.image.original img');

before.width = originalImage.width;
before.height = originalImage.height;
after.width = originalImage.width;
after.height = originalImage.height;

ctxBefore.drawImage(originalImage, 0, 0);
//ctxAfter.drawImage(originalImage, 0, 0);

