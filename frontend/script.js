let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
.to('.rock' , 3,{y:-600})
.to('.girl' , 3,{y:-400},'-=3')
.to('.main-title' , 3,{y:-200},'-=3')
.fromTo('.bg1' , {y:-50},{y:0,duration:3},'-=3')
.to('.content' , 3,{top:"0%"},'-=3');

let scene = new ScrollMagic.Scene({
    triggerElement: 'section',
    duration: "200%",
    triggerHook: 0,
})
.setTween(timeline)

.addTo(controller);