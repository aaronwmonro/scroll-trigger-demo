// var logosTimeLine = gsap.timeline();

// logosTimeline.from("#nf-logo",{duration:1, alpha:0 })
//                 .from("#p-logo",{duration:2, alpha:0 })
//                 .from("#y-logo",{duration:3, alpha:0 })
//                 .from("#c-logo",{duration:4, alpha:0 })
//                 .from("#co-logo",{duration:5, alpha:0 })


var logosTimeline = gsap.timeline();
// logosTimeline.from(".logo",{duration:3, alpha:0 })
logosTimeline.from("#nf-logo",{duration:1, alpha:0 }, "logosFade")
                .from("#p-logo",{duration:3, alpha:0 }, "logosFade")
                .from("#y-logo",{duration:5, alpha:0 }, "logosFade")
                .from("#c-logo",{duration:7, alpha:0 }, "logosFade")
                .from("#co-logo",{duration:9, alpha:0 }, "logosFade")
            

                ScrollTrigger.create({
                    trigger: ".logo",
                    start: "top 80%",
                    end: "bottom 20%",
                    animation: logosTimeline,
                    scrub: 1
                    // markers: true
                });