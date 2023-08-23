import { gsap } from "gsap";


export function gsapHeader () {

    const tl = gsap.timeline();

    tl.fromTo('.navbar__menu_span',{
        x: 200,
        opacity: 0,
    },
    {
        x:0,
        opacity: 1,
        duration: 1,
    },2
    )
}