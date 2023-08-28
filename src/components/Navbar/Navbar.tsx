import { FC } from "react";
import { INavbar } from "../Interface/INavbar";
import { NavLink } from "react-router-dom";
import "./navbar.sass"



const hasMenu = (e: React.MouseEvent<HTMLDivElement>) => {

}

export const Navbar: FC<INavbar> = (props: INavbar) => {


    return (
        <div>
            <div className="navbar">
                <NavLink to={'#'} className="navbar__href">Билеты и абонементы</NavLink>
                <NavLink to={'#'} className="navbar__href">Как купить?</NavLink>
                <NavLink to={'#'} className="navbar__href">Правила</NavLink>
                <NavLink to={'#'} className="navbar__href">Возврат билетов</NavLink>
                <div className="navbar__href-shake">
                    <svg fill="#000000" width="800px" height="800px" viewBox="0 0 32 32" version="1.1"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16.642 20.669c-0.391 0.39-0.391 1.023-0 1.414 0.195 0.195 0.451 0.293 0.707 0.293s0.512-0.098 0.707-0.293l5.907-6.063-5.907-6.063c-0.39-0.39-1.023-0.39-1.414 0s-0.391 1.024 0 1.414l3.617 3.617h-19.264c-0.552 0-1 0.448-1 1s0.448 1 1 1h19.326zM30.005 0h-18c-1.105 0-2.001 0.895-2.001 2v9h2.014v-7.78c0-0.668 0.542-1.21 1.21-1.21h15.522c0.669 0 1.21 0.542 1.21 1.21l0.032 25.572c0 0.668-0.541 1.21-1.21 1.21h-15.553c-0.668 0-1.21-0.542-1.21-1.21v-7.824l-2.014 0.003v9.030c0 1.105 0.896 2 2.001 2h18c1.105 0 2-0.895 2-2v-28c-0.001-1.105-0.896-2-2-2z"></path>
                    </svg>
                    <NavLink to={'#'}>Выйти</NavLink>
                </div>
                <div onClick={hasMenu} className="navbar__menu">
                    <span className="navbar__menu_span span1"></span>
                    <span className="navbar__menu_span span2"></span>
                    <span className="navbar__menu_span span3"></span>
                </div>
            </div>
        </div>
    )

}