var weatherTimeline = gsap.timeline();
weatherTimeline.from("#thunder",{rotation: 180, duration:2, y:-100, alpha:0})
                .from("#summer",{rotation: 180, duration:2, y:100, alpha:0})
                .from("#wind",{rotation: 180, duration:2, y:-100, alpha:0})
                .from("#snow",{rotation: 180, duration:2, y:100, alpha:0})

ScrollTrigger.create({
    trigger: "#index-weather",
    start: "top 60%",
    end: "bottom 80%",
    animation: weatherTimeline,
    toggleActions: "restart none none restart",
    scrub: 1.5
    // markers: true
});
