import { FC, MutableRefObject, useEffect, useRef } from "react";
import { IContent } from "../Interface/IContent";
import "./content.sass"
import { gsapMain } from "../utils/gsap/gsapMain";
import { gsapHeader } from "../utils/gsap/gsapNavbar";



export const Content: FC<IContent> = (props: IContent) => {



    useEffect(() => {
        gsapMain();
        gsapHeader();



    },[])

    return(
        <div className="hexagons">
            <div className="hexagon hexagon1" ></div>
            <div className="hexagon hexagon2" ></div>
            <div className="hexagon hexagon3" ></div>
            <div className="hexagon hexagon4" ></div>
            <div className="hexagon hexagon5" ></div>
        </div>
    )
}