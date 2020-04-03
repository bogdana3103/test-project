import Rect from 'react';
import {stadiums} from './helper.js';
import stadium from '../image/stadium.svg';
import strip from '../image/strip.svg';

export default function Stadiums(props) {
    return (
        <div>
        <div className="blok3h2">
          <h2>наши самие большие проекти</h2>
        </div>
        <div className="blok3">
                {stadiums.map((stadiumm) =>
                <div className="image" key={stadiumm.key}>
                   <img className="stadium" src={stadium} alt={stadium}/>
                   <img className="strip" src={strip} alt={strip}/>
                   <h3>{stadiumm.titile}</h3>
                   <p>{stadiumm.text}</p>
                </div> 
               )
          }
            </div>
            </div>
            )
        }
        
           

