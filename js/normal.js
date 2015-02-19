function processGrayscale(){
  var start = new Date();
  var imageData = ctxBefore.getImageData(0,0,before.width,before.height);
  grayscale(imageData.data);
  ctxAfter.putImageData(imageData, 0, 0);
  var finished = new Date();
  alert((finished-start)/1000+" s");
}


function processSepia(){
  var start = new Date();
  var imageData = ctxBefore.getImageData(0,0,before.width,before.height);
  sepia(imageData.data);
  ctxAfter.putImageData(imageData, 0, 0);
  var finished =  new Date();
  alert((finished-start)/1000+" s");
}



