import React from 'react';
import './header.css';

class Header extends React.Component{
    render(){
        return (
            <div className="header">
                <a href="\home" className="logo">HABR</a>
                <div className="header-right">
                    <a className="active" href="\All">Все</a>
                    <a href="\news">Новости</a>
                    <a href="\articles">Статьи</a>
                </div>
            </div>
        )
    }
}

export default Header;