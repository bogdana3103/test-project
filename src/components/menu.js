import React from 'react';
import menu from '../image/menu.svg';
import logo from '../image/logo.svg';

function Menu() {
    return (
     <div className='blok1'>
        <div className="top">
             <img className="logo" src={logo} alt={logo}/>
             <img className="menu" src={menu} alt={menu}/>
        </div>
            <div className="blok1t">
                 <h1 className="texth1">РЕАЛИЗУЕМ КРУПНЕЙШИЕ ПРОЕКТИ В РОССИИ</h1>
                 <p className="textp">стадіони, газопроводи,мости,дамби</p>
            </div>
     </div>
     )
}

export default Menu 