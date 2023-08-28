import { FC, useEffect } from "react";
import { IContent } from "../Interface/IContent";
import "./hexagons.sass"
import "./trapezoid.sass"
import "./circle.sass"
import { gsapMain } from "../utils/gsap/gsapMain";
import { gsapHeader } from "../utils/gsap/gsapNavbar";
import { data } from "../utils/data"
import { gsapText } from "../utils/gsap/gsapText";
import { gsapClickActive } from "../utils/gsap/gsapClickActive";
import { gsapTrapezoid } from "../utils/gsap/gsapTrapezoid";



export const Content: FC<IContent> = (props: IContent) => {
    
    const dataContent = data;
    
    const makeHexagonActive = (e: React.MouseEvent<HTMLDivElement>) => {

        const elem = e.target as HTMLElement;
        const hexagonClass :string = elem.classList[1]; 

        const reg = /hexagon./gm
        const elemParent = elem.parentNode as HTMLElement
        (reg.test(hexagonClass)) ? gsapClickActive(hexagonClass) : gsapClickActive(elemParent.classList[1]);
    }

    
    useEffect(() => {
        gsapHeader();
        gsapMain();
        gsapText();
        gsapTrapezoid();
    }, [])
    

    if (!data) {
        return (
            <div>
                No date!
            </div>
        )
    }

    return (
        <div className="hexagons">
            <div className="bigCircle Circle"></div>
            <div className="middleCircle Circle"></div>
            <div className="smallCircle Circle"></div>
            {
                dataContent.map((elem, i) => {
                    const nameClassHexagon: string = `hexagon hexagon${i + 1}`
                    const nameClassTrapezoidLeft: string = `trapezoid trapezoidL trapezoid${i + 1}L`
                    const nameClassTrapezoidRight: string = `trapezoid  trapezoidR trapezoid${i + 1}R`
                    return (
                        <div>
                            <div className={nameClassTrapezoidLeft}><span>{elem.firstMember}</span></div>
                            <div className={nameClassHexagon} onClick={makeHexagonActive}>
                                <p className="hexagon__stadium">{elem.stadium}</p>
                                <p className="hexagon__date" onClick={makeHexagonActive}>{elem.date.toUpperCase()}</p>
                                <p className="hexagon__time">{elem.time}</p>
                                <button className="hexagon__btn">Купить билет</button>
                            </div>
                            <div className={nameClassTrapezoidRight}><span>{elem.secondMember}</span></div>
                        </div>
                    )
                })
            }
        </div>
    )
}