import { FC } from "react";
import { INavbar } from "../Interface/INavbar";
import { NavLink } from "react-router-dom";
import { HandySvg } from "handy-svg";
import LogInSvg from "../asset/LogIn.svg"
import styles from "./navbar.module.sass"



const hasMenu = (e: React.MouseEvent<HTMLDivElement>) => {

}

export const Navbar: FC<INavbar> = (props: INavbar) => {


    return (
        <div className={styles.navbar}>
            <NavLink to={'#'}>Билеты и абонементы</NavLink>
            <NavLink to={'#'}>Как купить?</NavLink>
            <NavLink to={'#'}>Правила</NavLink>
                <NavLink to={'#'}>Возврат билетов</NavLink>
            <div>
                <HandySvg
                    src={LogInSvg.toString()}
                    width="30"
                    height="30"
                    className={styles.logInSvg}
                />
                <NavLink to={'#'}>Выйти</NavLink>
            </div>
            <div onClick={hasMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )

}