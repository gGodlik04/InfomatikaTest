import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)


export function gsapMain () {



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
        
    },
    )
    .fromTo('.trapezoidL', {
        x:-500,
        scale:0,
    },
    {
        x: 0,
        scale: 1,
    })
    .fromTo('.trapezoidR', {
        x:2500,
        scale:0,
        duration: 1
    },
    {
        x: 0,
        scale: 1,
    })
    


    // scroll animation right

    const tlr1 = gsap.timeline()
    const tlr2 = gsap.timeline()
    const tlr3 = gsap.timeline()
    const tlr4 = gsap.timeline()
    const tlr5 = gsap.timeline()
    

   //////
    
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
        y: -330,  // 330
        scale: 2.10,
        x: 525,  
        className: 'hexagon hexagon1 activeHexagon',
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
        className: 'hexagon hexagon2 activeHexagon',
    }
    )
    .to('.hexagon2',{
        y: -330,
        scale: 1,
        x: 606,
        className: 'hexagon hexagon2',
    })



    
    ////////

    tlr3.fromTo('.hexagon3',{
        x: 0,
        y: 0,
        scale: 1,
        className: 'hexagon hexagon3 activeHexagon',
    },
    {
        y: -150,
        scale: 0.7,
        x: 270,
        className: 'hexagon hexagon3',
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
        zIndex: -999,
    })

    ///////

    tlr5.fromTo('.hexagon5',{
        x: 0,
        y: 0,
        scale: 1,
    },
    {
        scale:0,
        zIndex: -999,
    })


    /////
    /////


    ScrollTrigger.create({
        animation: tlr1,
        trigger: '#hexagon3',
        start: '50%',
        end: '90%',
        scrub: true,
        toggleClass:{targets:".hexagon1", className:"active"}
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




    // scroll animation left



    const tll1 = gsap.timeline()
    const tll2 = gsap.timeline()
    const tll3 = gsap.timeline()
    const tll4 = gsap.timeline()
    const tll5 = gsap.timeline()
    

    
   //////
    
    tll1.fromTo('.hexagon1',{
        scale: 0,
        opacity: 0
    },{
        x: 0,
        y: 0,
        scale: 1,
    })
   

    
    ///////

    tll2.fromTo('.hexagon2',{
        scale: 0,
        opacity: 0,
        y: 120,
        x: -210,
    },{
        y: 120,
        scale: 0.7,
        x: -210,
    }).to('.hexagon2',{
        x: 0,
        y: 0,
        scale: 1,
    })

    
    ////////

    tll3.fromTo('.hexagon3',{
        y: 257,
        scale: 0.5,
        x: -487,
        className: 'hexagon hexagon3',
    },
    {
        y: 150,
        scale: 0.7,
        x: -270,
        className: 'hexagon hexagon3',
    })
    .to('.hexagon3',{
        x: 0,
        y: 0,
        scale: 1,
        className: 'hexagon hexagon3 activeHexagon',
    })


    ///////

    tll4.fromTo('.hexagon4',{
        y: 302,
        scale: 1,
        x: -547,
    },
    {
        y: 150,
        scale: 1.45,
        x: -270,
        className: 'hexagon hexagon4 activeHexagon',
    })
    .to('.hexagon4',{
        x: 0,
        y: 0,
        scale: 1, 
        className: 'hexagon hexagon4',
    })

    ///////

    tll5.fromTo('.hexagon5',{
        y: 265,
        scale: 1.9,
        x: -480,
        className: 'hexagon hexagon5 activeHexagon',
    },
    {
        y: 120,
        scale: 1.4,
        x: -217,
        className: 'hexagon hexagon5',
    })
    .to('.hexagon5',
    {
        x: 0,
        y: 0,
        scale: 1,
    })


    /////
    /////


    ScrollTrigger.create({
        animation: tll1,
        trigger: '#hexagon3',
        start: '0%',
        end: '50%',
        scrub: true,
    })

    ScrollTrigger.create({
        animation: tll2,
        trigger: '#hexagon3',
        start: '0%',
        end: '50%',
        scrub: true,
    })

    ScrollTrigger.create({
        animation: tll3,
        trigger: '#hexagon3',
        start: '0%',
        end: '50%',
        scrub: true,
    })

    ScrollTrigger.create({
        animation: tll4,
        trigger: '#hexagon3',
        start: '0%',
        end: '50%',
        scrub: true,
    })

    ScrollTrigger.create({
        animation: tll5,
        trigger: '#hexagon3',
        start: '0%',
        end: '50%',
        scrub: true,
    })


}

