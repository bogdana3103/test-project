import React from 'react';
import item from '../image/item.svg';

function Items() {
    return (
       <div className="blok2">
            <img className="item" src={item} alt={item}/>
            <img className="item" src={item} alt={item}/>
            <img className="item" src={item} alt={item}/>
            <img className="item" src={item} alt={item}/>
        </div>
    )
}

export default Items