import { FC } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger)




export function gsapClickActive (hexagonClass : string) {



    const tlHexagon1 = gsap.timeline()
    const tlHexagon2 = gsap.timeline()
    const tlHexagon3 = gsap.timeline()
    const tlHexagon4 = gsap.timeline()
    const tlHexagon5 = gsap.timeline()

    if (hexagonClass == "hexagon1"){
        gsap.to(window, {duration: 1, scrollTo: 4061});
    }
    if (hexagonClass == "hexagon2"){
        gsap.to(window, {duration: 1, scrollTo: 3490});
    }
    if (hexagonClass == "hexagon3"){
        gsap.to(window, {duration: 1, scrollTo: 2500});
    }
    if (hexagonClass == "hexagon4"){
        gsap.to(window, {duration: 1, scrollTo: 1167});
    }
    if (hexagonClass == "hexagon5"){
        gsap.to(window, {duration: 1, scrollTo: 0});
    }

}