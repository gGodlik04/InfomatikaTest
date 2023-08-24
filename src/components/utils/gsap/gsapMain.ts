import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export function gsapMain () {



    // const scrollContainer = document.querySelector("#scroll") as HTMLElement;

    // scrollContainer?.addEventListener("wheel", (evt) => {
    //     if (window.pageYOffset == 0){
    //         console.log(window.pageYOffset)
    //         console.log(evt.deltaY)
    //         console.log(scrollContainer.scrollWidth)
    //         scrollContainer.scrollLeft += 100;
    //     }
    // });


    // function test (){
     
       
    //    console.log(window.pageYOffset)
    // }


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
        // toggleActions: "restart pause reverse pause"
    })

    ScrollTrigger.create({
        animation: tlr2,
        trigger: '#hexagon3',
        start: '50%',
        end: '90%',
        scrub: true,
        // toggleActions: "restart pause reverse pause"
    })

    ScrollTrigger.create({
        animation: tlr3,
        trigger: '#hexagon3',
        start: '50%',
        end: '90%',
        scrub: true,
        // toggleActions: "restart pause reverse pause"
    })

    ScrollTrigger.create({
        animation: tlr4,
        trigger: '#hexagon3',
        start: '50%',
        end: '90%',
        scrub: true,
        // toggleActions: "restart pause reverse pause"
    })

    ScrollTrigger.create({
        animation: tlr5,
        trigger: '#hexagon3',
        start: '50%',
        end: '90%',
        scrub: true,
        // toggleActions: "restart pause reverse pause"
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
    },
    {
        y: 150,
        scale: 0.7,
        x: -270,
    })
    .to('.hexagon3',{
        x: 0,
        y: 0,
        scale: 1,
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
    })
    .to('.hexagon4',{
        x: 0,
        y: 0,
        scale: 1,   
    })

    ///////

    tll5.fromTo('.hexagon5',{
        y: 265,
        scale: 2,
        x: -480,
    },
    {
        y: 120,
        scale: 1.4,
        x: -217,
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

