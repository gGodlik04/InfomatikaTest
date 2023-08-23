import { FC, MutableRefObject, useEffect, useRef } from "react";
import { IContent } from "../Interface/IContent";
import "./content.sass"
import { gsapMain } from "../utils/gsap/gsapMain";
import { gsapHeader } from "../utils/gsap/gsapNavbar";



export const Content: FC<IContent> = (props: IContent) => {



    useEffect(() => {
        // window.scrollTo(100, document.body.scrollHeight);
        gsapMain();
        gsapHeader();



    },[])

    return(
        <div className="hexagons">
            <div className="hexagon hexagon1" ><p>ewqewqewq</p></div>
            <div className="hexagon hexagon2" ><p>ewqewqewq</p></div>
            <div className="hexagon hexagon3" ><p>ewqewqewq</p></div>
            <div className="hexagon hexagon4" ><p>ewqewqewq</p></div>
            <div className="hexagon hexagon5" ><p>ewqewqewq</p></div>
        </div>
    )
}