// var headerTimeline = gsap.timeline();
// headerTimeline.to("#card",{duration:1, backgroundColor: "#white"})

// ScrollTrigger.create({
//     trigger: "#hero",
//     start: 'top top',
//     end: 'bottom top',
//     toggleActions: 'play reverse play reverse',
//         backgroundColor: '#000',
//         color: '#fff',
//         duration: 0.5
//     // scrub: true
//     markers: true
// });

// gsap.to('header', {
//     scrollTrigger: {
//         markers: true,
//         trigger: "#hero",
//         start: 'top top',
//         end: 'bottom top',
//         toggleActions: 'play reverse play reverse'
//     },
//     backgroundColor: '#white',
//     duration: 0.5
// });

gsap.utils.toArray("#hero").forEach((section, i) => {
    gsap.to("#header", {
        scrollTrigger: {
            markers: true,
            trigger: section,
            start: 'top top',
            end: 'bottom top',
            toggleActions: 'play reverse play reverse'
        },
        backgroundColor: '#white',
        duration: 0.5
    });
});