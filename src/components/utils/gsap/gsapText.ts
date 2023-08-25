import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)


export function gsapText () {
    
    const tlr1 = gsap.timeline()
    const tlr2 = gsap.timeline()
    const tlr3 = gsap.timeline()
    const tlr4 = gsap.timeline()
    const tlr5 = gsap.timeline()


    tlr1.fromTo('.hexagon1',{
        y: 0,
        x: 0,
        scale: 1
    },{
        y: -120,
        scale: 1.4,
        x: 207,
    })
    .to('.hexagon1',{
        y: -300,
        scale: 2.15,
        x: 525,
    })

    
    ///////

    tlr2.fromTo('.hexagon2',{
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

    tlr3.fromTo('.hexagon3',{
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

    tlr4.fromTo('.hexagon4',{
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

    })

    ///////

    tlr5.fromTo('.hexagon5',{
        x: 0,
        y: 0,
        scale: 1,
    },
    {
        scale:0,
    })


    /////
    /////


    ScrollTrigger.create({
        animation: tlr1,
        trigger: '#hexagon3',
        start: '50%',
        end: '90%',
        scrub: true,
    })

    ScrollTrigger.create({
        animation: tlr2,
        trigger: '#hexagon3',
        start: '50%',
        end: '90%',
        scrub: true,
    })

    ScrollTrigger.create({
        animation: tlr3,
        trigger: '#hexagon3',
        start: '50%',
        end: '90%',
        scrub: true,
    })

    ScrollTrigger.create({
        animation: tlr4,
        trigger: '#hexagon3',
        start: '50%',
        end: '90%',
        scrub: true,
    })

    ScrollTrigger.create({
        animation: tlr5,
        trigger: '#hexagon3',
        start: '50%',
        end: '90%',
        scrub: true,
    })

}
