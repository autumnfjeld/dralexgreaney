
(function(window) {
	'use strict';
    var touchDeviceEvent = new CustomEvent('touch-device-detected', {bubbles: true, cancelable: true});
    //If IE do this:
    // polyfill https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
    // var event = document.createEvent('Event');
    // event.initEvent('my-custom-event', true, true); //can bubble, and is cancellable
    // someElement.dispatchEvent(event);

	// TODO Come back to this with getters & setters and proper code
	window.app.Storage = {};

    window.addEventListener('touchstart', function onFirstTouch() {
      $(document.body).attr('id', 'touch-device');

      // Set global variable -- TODO revisit if this will be needed
      window.app.Storage.isTouchDevice = true;

      window.dispatchEvent(touchDeviceEvent);
      console.log('isTouchDevice', window.app.Storage.isTouchDevice);
    }, {once: true}, false);
 
})(window);