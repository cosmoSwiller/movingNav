/* jQuery add-on method taken from http://stackoverflow.com/questions/7392058/more-efficient-way-to-handle-window-scroll-functions-in-jquery
I needed the nav position to animate after scrolling had taken place and to animate only once. You pass this function a timeout value and code will execute
after the user has stopped scrolling. Works perfectly. */

$.fn.scrolled = function (waitTime, fn) {
    var tag = "scrollTimer";
    this.scroll(function () {
        var self = $(this);
        var timer = self.data(tag);
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            self.data(tag, null);
            fn();
        }, waitTime);
        self.data(tag, timer);
    });
}

/*
The anuimation wrapped in the scrolled function created above 
*/

$(window).scrolled(300, function() {
		var pagetop = $(window).scrollTop(); //pixel to top of browser window
		$('#navPos').animate({ 
		margin: '10',
		top: pagetop, // creates CSS attribute for distance to top of browser window
	}, 500);
});