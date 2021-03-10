// GSAP - GreenSock
// --------------------------------------------------------
gsap.registerPlugin(ScrollTrigger);
//variables
let scene = gsap.timeline(),
	distance = 62;
//scroll trigger
ScrollTrigger.create({
	animation:scene,
	trigger: "body",
	start: "top top",
	end: "100% 100%",
	scrub: 4
});
//background gradient
scene.to("#background", {
	y: -(.5 * distance),
	ease: "none"
},0);

//clouds
scene.to("#cloud_1", {
	x: (10 * distance),
	ease: "none"
},0);

scene.to("#cloud_1shadow", {
	x: (10 * distance),
	ease: "none"
},0);


scene.to("#cloud_2", {
	x: (7 * distance),
	ease: "none"
},0);

scene.to("#cloud_2shadow", {
	x: (7 * distance),
	ease: "none"
},0);


scene.to("#cloud_3", {
	x: (5 * distance),
	ease: "none"
},0);

scene.to("#cloud_3shadow", {
	x: (5 * distance),
	ease: "none"
},0);


scene.to("#cloud_4", {
	x: (3.5 * distance),
	ease: "none"
},0);

scene.to("#cloud_4shadow", {
	x: (3.5 * distance),
	ease: "none"
},0);


scene.to("#cloud_5_midle", {
	x: (3 * distance),
	ease: "none"
},0);

scene.to("#cloud_5_midleshadow", {
	x: (3 * distance),
	ease: "none"
},0);


scene.to("#cloud_6_back", {
	x: (2.5 * distance),
	ease: "none"
},0);

scene.to("#cloud_6_backshadow", {
	x: (2.5 * distance),
	ease: "none"
},0);

scene.to("#cloud_7_back", {
	x: (2 * distance),
	ease: "none"
},0);


//sun clouds
scene.to("#cloud_sun3", {
	x: (3.5 * distance),
	ease: "none"
},0);

scene.to("#cloud_sun2", {
	x: (3 * distance),
	ease: "none"
},0);

scene.to("#cloud_sun1", {
	x: (3 * distance),
	ease: "none"
},0);


//sun
scene.to("#sun_1", {
	y: -(1 * distance),
	ease: "none"
},0);

scene.to("#sun_2", {
	y: -(1 * distance),
	ease: "none"
},0);

scene.to("#sun_3", {
	y: -(1 * distance),
	ease: "none"
},0);

//rock
scene.to("#rock_down", {
	y: (.5 * distance),
	ease: "none"
},0);

scene.to("#rock_up", {
	y: (.5 * distance),
	ease: "none"
},0);

//circle roll
scene.to(".internal", {rotation:200, transformOrigin:"50% 50%", ease: "none"},0);

//strokes move
scene.to("#stroke_down", {
	strokeDashoffset: "20%",
	ease: "none"
},0);

scene.to("#stroke_up", {
	strokeDashoffset: "29%",
	ease: "none"
},0);