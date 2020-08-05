gsap.registerPlugin( ScrollTrigger);

gsap.to("#hero",{
    scrollTrigger:{
        trigger: "#hero",
        start: "top 0px",
        pin:true,
        pinSpacing: false
    }

  
}
);