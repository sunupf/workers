importScripts('function.js');

self.addEventListener('message', function(e) {
  var canvasData =  e.data.pixels;
  switch(e.data.effect){
      case 'sepia': 
        canvasData.data = sepia(canvasData.data);
      break;
      case 'gray': 
        canvasData.data = grayscale(canvasData.data);
      break;
  }
  var pesan = {'data':canvasData};
  if(e.data.index>=0){
    pesan.index = e.data.index;
  }
  self.postMessage(pesan);
}, false);