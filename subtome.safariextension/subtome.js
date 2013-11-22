safari.self.addEventListener('message', function (evt) {
  if (evt.name == 'subtome-button' && window.top === window) {
    var z = window.top.document.createElement('script');
    z.src = 'https://www.subtome.com/load.js';
    window.top.document.body.appendChild(z);
  }
}, false);