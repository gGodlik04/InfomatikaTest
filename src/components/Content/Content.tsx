import { FC, useEffect, } from "react";
import { IContent } from "../Interface/IContent";
import "./hexagons.sass"
import "./trapezoid.sass"
import { gsapMain } from "../utils/gsap/gsapMain";
import { gsapHeader } from "../utils/gsap/gsapNavbar";
import { data } from "../utils/data"
import { gsapText } from "../utils/gsap/gsapText";
import { gsapClickActive } from "../utils/gsap/gsapClickActive";
import { gsap } from "gsap";''






export const Content: FC<IContent> = (props: IContent) => {
    
    const dataContent = data;
    
    const makeHexagonActive = (e: React.MouseEvent<HTMLDivElement>) => {
        const elem = e.target as HTMLElement;
        const hexagonClass = elem.classList[1]; 
        gsapClickActive(hexagonClass);
        console.log(hexagonClass);
    }
    
    useEffect(() => {
        window.scrollTo(0, 2500);
        gsapHeader();
        gsapMain();
        gsapText();
        setInterval(() => console.log(window.pageYOffset), 500)
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
            <div className="trapezoid trapezoid1"><span>Текст</span></div>
            {
                dataContent.map((elem, i) => {
                    const nameClassHexagon: string = `hexagon hexagon${i + 1}`
                    return (
                        <div>
                            <div className={nameClassHexagon} onClick={makeHexagonActive}>
                                <p className="hexagon__stadium">{elem.stadium}</p>
                                <p className="hexagon__date">{elem.date.toUpperCase()}</p>
                                <p className="hexagon__time">{elem.time}</p>
                                <button className="hexagon__btn">Купить билет</button>
                            </div>
                        </div>
                    )
                })
            }
            <div className="trapezoid trapezoid2"><span>Текст</span></div>
        </div>
    )
}