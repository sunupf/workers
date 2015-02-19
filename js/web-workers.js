// created based on 
// http://blogs.msdn.com/b/eternalcoding/archive/2012/09/20/using-web-workers-to-improve-performance-of-image-manipulation.aspx
// with some changes

var start = 0;
var workerNumber = 4;
var len = before.width * before.height * 4;
var processed = 0;


var segmentLength = len / workerNumber; 
var blockSize = before.height / workerNumber;

var onWorkEnd =  function(e) {
  var canvasData = e.data.data; 
  var index = e.data.index;

  // Copying back canvas data to canvas
  ctxAfter.putImageData(canvasData, 0, blockSize * index);

  processed++;

  if (processed === workerNumber) {
      var finished = new Date();
      alert((finished-start)/1000+" s");
  }
}

function process(type){
  start = new Date();
  processed = 0;
  for(i=0;i<workerNumber;i++){
    var worker = new Worker('js/worker.js');
    worker.addEventListener('message',onWorkEnd,false);
    var imageData = ctxBefore.getImageData(0, blockSize * i, before.width, blockSize);

    worker.postMessage({'effect': type, 'index': i, 'pixels': imageData});
  }
}



