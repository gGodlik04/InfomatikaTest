import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export function gsapMain () {

    gsap.registerPlugin(ScrollTrigger)
    const tl = gsap.timeline()

    // timeline animation

    tl.fromTo('.navbar',{
        y: -50,
        opacity: 0
    },
    {
        y: 0,
        opacity: 1,
        duration: 1,
    },
    1,
    )
    .fromTo('.hexagon', {
        y: 500,
        scale: 0,
        opacity: 0
    },
    {
        y:0,
        scale: 1,
        opacity: 1,
        duration: 2,
        stagger: 0.15
        
    }
    )


    // scroll animation

    const tl2 = gsap.timeline()

    tl2.to('.hexagon1',{
        toggleClass: 'active',
        x:500,
    })

    tl2.to('.hexagon3',{
        toggleClass: 'active',
        x: 500,
    })

    ScrollTrigger.create({
        animation: tl2,
        trigger: '#scroll',
        start: 'center center',
        end: 'bottom',
        markers: true,
        scrub: true,
    })


}

