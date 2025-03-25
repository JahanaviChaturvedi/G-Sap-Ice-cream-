var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#s1",
        start: "0% 80%",
        end: "50% 50%",
        // markers: true,
        scrub: true
    }
})

tl.to(".inner-image-center",{
    top: "123%",
    width: "17vw",
    rotation: "0",
    left: "52%"
})

var tl1 = gsap.timeline({
    scrollTrigger:{
        trigger:"#s2",
        start: "0% 80%",
        end: "50% 50%",
        // markers: true,
        scrub: true
    }
})

tl1.to(".inner-image-center",{
    top: "228%",
    width: "12vw",
    left: "27.5%"
})

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#s3",
        start: "0% 65%",
        end: "50% 50%",
        // markers: true,
        scrub: true
    }
})

tl2.to(".inner-image-center",{
    top: "300%",
    width: "19vw",
    rotation: "-49.5deg",
    left: "28%"
})
