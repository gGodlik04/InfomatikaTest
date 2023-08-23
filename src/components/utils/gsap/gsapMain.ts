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
    const tl3 = gsap.timeline()
    const tl4 = gsap.timeline()
    const tl5 = gsap.timeline()
    const tl6 = gsap.timeline()
    
    // tl2.fromTo('.hexagon1',{
    //     y: 0,
    //     x: 0,
    //     scale: 1
    // },
    // {
    //     y: -120,
    //     scale: 1.4,
    //     x: 207,
    // })
    
   //////
    
    tl2.fromTo('.hexagon1',{
        y: 0,
        x: 0,
        scale: 1
    },{
        y: -120,
        scale: 1.4,
        x: 207,
    })
    .to('.hexagon1',{
        y: -310,
        scale: 2.15,
        x: 525,
    })

    
    ///////

    tl3.fromTo('.hexagon2',{
        x: 0,
        y: 0,
        scale: 1,
    },
    {
        y: -150,
        scale: 1.4,
        x: 278,
    }
    )
    .to('.hexagon2',{
        y: -330,
        scale: 1,
        x: 606,
    })



    
    ////////

    tl4.fromTo('.hexagon3',{
        x: 0,
        y: 0,
        scale: 1,
    },
    {
        y: -150,
        scale: 0.7,
        x: 270,
    })
    .to('.hexagon3',{
        y: -285,
        scale: 0.4,
        x: 525,
    })


    ///////

    tl5.fromTo('.hexagon4',{
        x: 0,
        y: 0,
        scale: 1,
    },
    {
        y: -115,
        scale: 0.6,
        x: 211,

    })
    .to('.hexagon4',{
        scale:0,
        opacity:0,

    })

    ///////

    tl6.fromTo('.hexagon5',{
        x: 0,
        y: 0,
        scale: 1,
    },
    {
        scale:0,
        opacity:0,
        zIndex:0
    })


    /////
    /////


    ScrollTrigger.create({
        animation: tl2,
        trigger: '#hexagon3',
        start: '0%',
        end: '100%',
        markers: true,
        scrub: true,
        // toggleActions: "restart pause reverse pause"
    })

    ScrollTrigger.create({
        animation: tl3,
        trigger: '#hexagon3',
        start: '0%',
        end: '100%',
        markers: true,
        scrub: true,
        // toggleActions: "restart pause reverse pause"
    })

    ScrollTrigger.create({
        animation: tl4,
        trigger: '#hexagon3',
        start: '0%',
        end: '100%',
        markers: true,
        scrub: true,
        // toggleActions: "restart pause reverse pause"
    })

    ScrollTrigger.create({
        animation: tl5,
        trigger: '#hexagon3',
        start: '0%',
        end: '100%',
        markers: true,
        scrub: true,
        // toggleActions: "restart pause reverse pause"
    })

    ScrollTrigger.create({
        animation: tl6,
        trigger: '#hexagon3',
        start: '0%',
        end: '100%',
        markers: true,
        scrub: true,
        // toggleActions: "restart pause reverse pause"
    })


}

