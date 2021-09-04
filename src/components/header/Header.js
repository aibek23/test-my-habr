import React from 'react';
import './header.css';
import {Link, NavLink} from 'react-router-dom'

class Header extends React.Component{
    render(){
        return (
            <div className="header">
                <Link to={'/posts'} className="logo">HABR</Link>
                <div className="header-right">
                    <NavLink to={"/posts"}>Все</NavLink>
                    <NavLink to={"/contacts"}>контакты</NavLink>
                    <NavLink to={"/news"}> Новости </NavLink>
                    <NavLink to={"/articles"}>Статьи</NavLink>
                </div>
            </div>
        )
    }
}

export default Header;