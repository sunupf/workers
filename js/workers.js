importScripts('function.js');

self.addEventListener('message', function(e) {
  var canvasData =  e.data.pixels;
  switch(e.data.effect){
      case 'sepia': 
        canvasData.data = sepia(canvasData.data);
        self.postMessage({'data':canvasData});
      break;
      case 'gray': 
        canvasData.data = grayscale(canvasData.data);
        self.postMessage({'data':canvasData});
      break;
  }
}, false);