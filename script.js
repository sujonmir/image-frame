var frameSelector = document.querySelector('.frame-selector');
var frameImages = document.querySelectorAll('.frame-image');

frameSelector.addEventListener('change', function() {
  var frameType = this.value;
  frameImages.forEach(function(frameImage) {
    frameImage.classList.remove('frame-white', 'frame-black', 'frame-wooden');
    frameImage.classList.add('frame-' + frameType);
  });
});
