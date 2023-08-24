import { FC, useEffect, } from "react";
import { IContent } from "../Interface/IContent";
import "./content.sass"
import { gsapMain } from "../utils/gsap/gsapMain";
import { gsapHeader } from "../utils/gsap/gsapNavbar";
import {data} from "../utils/data"



export const Content: FC<IContent> = (props: IContent) => {

        const dataContent = data;


    useEffect(() => {
        window.scrollTo(0, 2500);
        gsapMain();
        gsapHeader();
        console.log(data);
    },[])

    if(!data){
        return(
            <div>
                Данные нет!
            </div>
        )
    }

    return(
        <div className="hexagons">
            {
                dataContent.map((elem, i) => {
                    const nameClass:string = `hexagon hexagon${i+1}`
                    return (
                        <div>
                            <div className={nameClass}><p>{elem.stadium}</p></div>
                        </div>
                    )
                })
            }
        </div>
    )
}