import React from 'react';
import './header.css';

class Header extends React.Component{
    render(){
        return (
            <div className="header">
                <a href="#" className="logo">HABR</a>
                <div className="header-right">
                    <a className="active" href="#home">Все</a>
                    <a href="#">Новости</a>
                    <a href="#">Статьи</a>
                </div>
            </div>
        )
    }
}

export default Header;