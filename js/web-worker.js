var worker = new Worker('js/worker.js');
var imageData = ctxBefore.getImageData(0,0,before.width,before.height);
var start = "";

worker.addEventListener('message', function(e) {
  ctxAfter.putImageData(e.data.data,0,0);
  var finished = new Date();
  alert((finished-start)/1000+" s");
}, false);

function processGrayscale(){
  start = new Date();
  worker.postMessage({'effect': 'gray', 'pixels': imageData});
}

function processSepia(){
  start = new Date();
  worker.postMessage({'effect': 'sepia', 'pixels': imageData});
}



