import { FC } from "react";
import { INavbar } from "../Interface/INavbar";
import { NavLink } from "react-router-dom";
import { HandySvg } from "handy-svg";
import LogInSvg from "../asset/LogIn.svg"
import "./navbar.sass"



const hasMenu = (e: React.MouseEvent<HTMLDivElement>) => {

}

export const Navbar: FC<INavbar> = (props: INavbar) => {


    return (
        <div>
            <div className="navbar">
                <NavLink to={'#'}  className="navbar__href">Билеты и абонементы</NavLink>
                <NavLink to={'#'}  className="navbar__href">Как купить?</NavLink>
                <NavLink to={'#'}  className="navbar__href">Правила</NavLink>
                <NavLink to={'#'}  className="navbar__href">Возврат билетов</NavLink>
                <div className="navbar__href-shake">
                    <HandySvg
                        src={LogInSvg.toString()}
                        width="30"
                        height="30"
                        className="navbar__logInSvg"
                    />
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