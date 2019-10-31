$(function () {
    // Smooth Scrolling
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});


// Animationen
window.sr = ScrollReveal();

sr.reveal('.app-links', {
    duration: 2000,
    origin: 'top',
    distance: '300px'
});
sr.reveal('.app-rechts', {
    duration: 2000,
    origin: 'right',
    distance: '300px'
});
sr.reveal('#home div', {
    duration: 2000,
    origin: 'bottom',
    distance: '200px'
});
sr.reveal('.android', {
    duration: 2000,
    origin: 'left',
    distance: '400px'
});
sr.reveal('.ios', {
	duration: 2000,
	origin: 'right',
	distance: '400px'
});
sr.reveal('.web-überschrift', {
	duration: 2000,
	origin: 'top',
	distance: '100px'
});
sr.reveal('.heading-underline', {
	duration: 2000,
	origin: 'top',
	distance: '100px'
});
sr.reveal('.web-text', {
	duration: 2000,
	origin: "bottom",
	distance: '250px'
});
sr.reveal('.web-rechts', {
	duration: 2000,
	origin: "bottom",
	distance: '400px'
});
sr.reveal('.web2-bild', {
	duration: 2000,
	origin: "left",
	distance: '300px'
});