import { FC } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger)




export function gsapTrapezoid () {


    //////////////////  Trapezoid animation


    const tltrl1 = gsap.timeline()
    const tltrl2 = gsap.timeline()
    const tltrl3 = gsap.timeline()
    const tltrl4 = gsap.timeline()
    const tltrl5 = gsap.timeline()
    
    tltrl1
    .to('.trapezoid1L',{
        className: "displayNone",
    }).to('.trapezoid1L',{
        className: "displayNone",
    }).to('.trapezoid1L',{
        className: "trapezoid trapezoidL trapezoid1L",
    })

    tltrl2
    .to('.trapezoid2L',{
        className: "displayNone",
    }).to('.trapezoid2L',{
        className: "trapezoid trapezoidL trapezoid2L",
    }).to('.trapezoid2L',{
        className: "displayNone",
    })

    tltrl3
    .to('.trapezoid3L',{
        className: "trapezoid trapezoidL trapezoid3L",
    }).to('.trapezoid3L',{
        className: "displayNone",
    }).to('.trapezoid3L',{
        className: "displayNone",
    })
    
    tltrl4
    .to('.trapezoid4L',{
        className: "displayNone",
    }).to('.trapezoid4L',{
        className: "displayNone",
    }).to('.trapezoid4L',{
        className: "displayNone",
    })

    tltrl5
    .to('.trapezoid5L',{
        className: "displayNone",
    }).to('.trapezoid5L',{
        className: "displayNone",
    })



    ScrollTrigger.create({
        animation: tltrl1,
        trigger: '#hexagon3',
        start: '50%',
        end: '90%',
        scrub: true,
        toggleClass:{targets:".hexagon1", className:"active"}
    })

    ScrollTrigger.create({
        animation: tltrl2,
        trigger: '#hexagon3',
        start: '50%',
        end: '90%',
        scrub: true,
    })

    ScrollTrigger.create({
        animation: tltrl3,
        trigger: '#hexagon3',
        start: '50%',
        end: '90%',
        scrub: true,
    })

    ScrollTrigger.create({
        animation: tltrl4,
        trigger: '#hexagon3',
        start: '50%',
        end: '90%',
        scrub: true,
    })

    ScrollTrigger.create({
        animation: tltrl5,
        trigger: '#hexagon3',
        start: '50%',
        end: '90%',
        scrub: true,
    })


        //////// animation trapezoid left


        const tltrl6 = gsap.timeline()
        const tltrl7 = gsap.timeline()
        const tltrl8 = gsap.timeline()
        const tltrl9 = gsap.timeline()
        const tltrl10 = gsap.timeline()
        
        tltrl6
        .to('.trapezoid1R',{
            className: "displayNone",
        }).to('.trapezoid1R',{
            className: "displayNone",
        }).to('.trapezoid1R',{
            className: "trapezoid trapezoidR trapezoid1R",
        })
    
        tltrl7
        .to('.trapezoid2R',{
            className: "displayNone",
        }).to('.trapezoid2R',{
            className: "trapezoid trapezoidR trapezoid2R",
        }).to('.trapezoid2R',{
            className: "displayNone",
        })
    
        tltrl8
        .to('.trapezoid3R',{
            className: "trapezoid trapezoidR trapezoid3R",
        }).to('.trapezoid3R',{
            className: "displayNone",
        }).to('.trapezoid3R',{
            className: "displayNone",
        })
        
        tltrl9
        .to('.trapezoid4R',{
            className: "displayNone",
        }).to('.trapezoid4R',{
            className: "displayNone",
        }).to('.trapezoid4R',{
            className: "displayNone",
        })
    
        tltrl10
        .to('.trapezoid5R',{
            className: "displayNone",
        }).to('.trapezoid5R',{
            className: "displayNone",
        })
    
    
    
        ScrollTrigger.create({
            animation: tltrl6,
            trigger: '#hexagon3',
            start: '50%',
            end: '90%',
            scrub: true,
            toggleClass:{targets:".hexagon1", className:"active"}
        })
    
        ScrollTrigger.create({
            animation: tltrl7,
            trigger: '#hexagon3',
            start: '50%',
            end: '90%',
            scrub: true,
        })
    
        ScrollTrigger.create({
            animation: tltrl8,
            trigger: '#hexagon3',
            start: '50%',
            end: '90%',
            scrub: true,
        })
    
        ScrollTrigger.create({
            animation: tltrl9,
            trigger: '#hexagon3',
            start: '50%',
            end: '90%',
            scrub: true,
        })
    
        ScrollTrigger.create({
            animation: tltrl10,
            trigger: '#hexagon3',
            start: '50%',
            end: '90%',
            scrub: true,
        })






///////////// Animation right side

    const tltrr1 = gsap.timeline()
    const tltrr2 = gsap.timeline()
    const tltrr3 = gsap.timeline()
    const tltrr4 = gsap.timeline()
    const tltrr5 = gsap.timeline()
    
    tltrr1
    .to('.trapezoid1L',{
        className: "displayNone",
    }).to('.trapezoid1L',{
        className: "displayNone",
    })

    tltrr2
    .to('.trapezoid2L',{
        className: "displayNone",
    }).to('.trapezoid2L',{
        className: "displayNone"
    }).to('.trapezoid2L',{
        className: "displayNone",
    })

    tltrr3
    .to('.trapezoid3L',{
        className: "displayNone",
    }).to('.trapezoid3L',{
        className: "displayNone",
    }).to('.trapezoid3L',{
        className: "trapezoid trapezoidL trapezoid3L",
    })
    
    tltrr4
    .to('.trapezoid4L',{
        className: "displayNone",
    }).to('.trapezoid4L',{
        className: "trapezoid trapezoidL trapezoid4L",
    }).to('.trapezoid4L',{
        className: "displayNone",
    })

    tltrr5
    .to('.trapezoid5L',{
        className: "trapezoid trapezoidL trapezoid5L",
    }).to('.trapezoid5L',{
        className: "displayNone",
    })
    .to('.trapezoid5L',{
        className: "displayNone",
    })



    ScrollTrigger.create({
        animation: tltrr1,
        trigger: '#hexagon3',
        start: '0%',
        end: '50%',
        scrub: true,
    })

    ScrollTrigger.create({
        animation: tltrr2,
        trigger: '#hexagon3',
        start: '0%',
        end: '50%',
        scrub: true,
    })

    ScrollTrigger.create({
        animation: tltrr3,
        trigger: '#hexagon3',
        start: '0%',
        end: '50%',
        scrub: true,
    })

    ScrollTrigger.create({
        animation: tltrr4,
        trigger: '#hexagon3',
        start: '0%',
        end: '50%',
        scrub: true,
    })

    ScrollTrigger.create({
        animation: tltrr5,
        trigger: '#hexagon3',
        start: '0%',
        end: '50%',
        scrub: true,
    })


        //////// animation trapezoid left


        const tltrr6 = gsap.timeline()
        const tltrr7 = gsap.timeline()
        const tltrr8 = gsap.timeline()
        const tltrr9 = gsap.timeline()
        const tltrr10 = gsap.timeline()
        
        tltrr6
        .to('.trapezoid1R',{
            className: "displayNone",
        }).to('.trapezoid1R',{
            className: "displayNone",
        })

        tltrr7
        .to('.trapezoid2R',{
            className: "displayNone",
        }).to('.trapezoid2R',{
            className: "displayNone",
        }).to('.trapezoid2R',{
            className: "displayNone",
        })
    
        tltrr8
        .to('.trapezoid3R',{
            className: "displayNone",
        }).to('.trapezoid3R',{
            className: "displayNone",
        }).to('.trapezoid3R',{
            className: "trapezoid trapezoidR trapezoid3R",
        })
        
        tltrr9
        .to('.trapezoid4R',{
            className: "displayNone",
        }).to('.trapezoid4R',{
            className: "trapezoid trapezoidR trapezoid4R",
        }).to('.trapezoid4R',{
            className: "displayNone",
        })
    
        tltrr10
        .to('.trapezoid5R',{
            className: "trapezoid trapezoidR trapezoid5R",
        }).to('.trapezoid5R',{
            className: "displayNone",
        })
        .to('.trapezoid5R',{
            className: "displayNone",
        })
    
    
    
        ScrollTrigger.create({
            animation: tltrr6,
            trigger: '#hexagon3',
            start: '0%',
            end: '50%',
            scrub: true,
        })
    
        ScrollTrigger.create({
            animation: tltrr7,
            trigger: '#hexagon3',
            start: '0%',
            end: '50%',
            scrub: true,
        })
    
        ScrollTrigger.create({
            animation: tltrr8,
            trigger: '#hexagon3',
            start: '0%',
            end: '50%',
            scrub: true,
        })
    
        ScrollTrigger.create({
            animation: tltrr9,
            trigger: '#hexagon3',
            start: '0%',
            end: '50%',
            scrub: true,
        })
    
        ScrollTrigger.create({
            animation: tltrr10,
            trigger: '#hexagon3',
            start: '0%',
            end: '50%',
            scrub: true,
        })

}