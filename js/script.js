//$(function ($) {



//})(jQuery);

// GSAP
// --------------------------------------------------------
gsap.registerPlugin(ScrollTrigger);
/*
gsap.to("#Layer_1", {
	scrollTrigger:  {
		trigger: "#Layer_1",
		start: "bottom center",
		pin: true,
		and: "=+500"

	},
	x: -400,
	duration: 3
});
*/

let scene = gsap.timeline(),
	speed = 50;

ScrollTrigger.create({
	animation:scene,
	trigger: "body",
	start: "top top",
	end: "100% 100%",
	scrub: 6
});

scene.to("#cloud_1", {
	x: (10 * speed),
	ease: "power1.out"
},0);

scene.to("#cloud_1shadow", {
	x: (10 * speed),
	ease: "power1.out"
},0);


scene.to("#cloud_2", {
	x: (7 * speed),
	ease: "power1.out"
},0);

scene.to("#cloud_2shadow", {
	x: (7 * speed),
	ease: "power1.out"
},0);


scene.to("#cloud_3", {
	x: (5 * speed),
	ease: "power1.out"
},0);

scene.to("#cloud_3shadow", {
	x: (5 * speed),
	ease: "power1.out"
},0);


scene.to("#cloud_4", {
	x: (3.5 * speed),
	ease: "power1.out"
},0);

scene.to("#cloud_4shadow", {
	x: (3.5 * speed),
	ease: "power1.out"
},0);


scene.to("#cloud_5_midle", {
	x: (3 * speed),
	ease: "power1.out"
},0);

scene.to("#cloud_5_midleshadow", {
	x: (3 * speed),
	ease: "power1.out"
},0);


scene.to("#cloud_6_back", {
	x: (2.5 * speed),
	ease: "power1.out"
},0);

scene.to("#cloud_6_backshadow", {
	x: (2.5 * speed),
	ease: "power1.out"
},0);

scene.to("#cloud_7_back", {
	x: (2 * speed),
	ease: "power1.out"
},0);


//sun clouds
scene.to("#cloud_sun3", {
	x: (3.5 * speed),
	ease: "power1.out"
},0);

scene.to("#cloud_sun2", {
	x: (3 * speed),
	ease: "power1.out"
},0);

scene.to("#cloud_sun1", {
	x: (3 * speed),
	ease: "power1.out"
},0);


//sun
scene.to("#sun_1", {
	y: -(.7 * speed),
	ease: "power1.out"
},0);

scene.to("#sun_2", {
	y: -(.7 * speed),
	ease: "power1.out"
},0);

scene.to("#sun_3", {
	y: -(.7 * speed),
	ease: "power1.out"
},0);

//rock
scene.to("#rock_down", {
	y: (.5 * speed),
	ease: "power1.out"
},0);

scene.to("#rock_up", {
	y: (.5 * speed),
	ease: "power1.out"
},0);