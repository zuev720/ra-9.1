import React from 'react';
import {NavLink} from 'react-router-dom';

export function Menu() {
    return (
        <nav className="menu">
            <NavLink exact to={'/'} activeClassName={'menu__item-active'} className={'menu__item'}>Главная</NavLink>
            <NavLink activeClassName={'menu__item-active'}  to={'/drift'} className={'menu__item'}>Дрифт-такси</NavLink>
            <NavLink activeClassName={'menu__item-active'} to={'/timeattack'} className={'menu__item'}>Time Attack</NavLink>
            <NavLink activeClassName={'menu__item-active'} to={'/forza'} className={'menu__item'}>Forza Karting</NavLink>
        </nav>
    );
}
