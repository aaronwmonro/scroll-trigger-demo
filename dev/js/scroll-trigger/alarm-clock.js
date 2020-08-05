var clockTimeline = gsap.timeline();
clockTimeline.from("#card",{duration:2, x:1000 })
                .from("#clock",{duration:2, alpha:0}, "afterSlide")
                .from(".alarm-text",{duration:1.5, y: 100, alpha:0}, "afterSlide")

                ScrollTrigger.create({
                    trigger: "#card",
                    start: "top 90%",
                    end: "bottom 70%",
                    animation: clockTimeline,
                    toggleActions: "play none none none"
                    // markers: true
                });