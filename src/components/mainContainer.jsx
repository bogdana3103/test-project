import React from 'react';

//style
import './../scss/mainContainer.scss';

//image
// import brige from '../image/brige.svg';
import menu from '../image/menu.svg';
import logo from '../image/logo.svg';
import item from '../image/item.svg';
import white from '../image/white.svg';
import stadium from '../image/stadium.svg';
import strip from '../image/strip.svg';
//import bigstrip from '../image/bigstrip.svg';
import button from '../image/button.svg';
import building from '../image/building.svg';
//import portfolio from '../image/portfolio.svg';
import polygon from '../image/polygon.svg';
import berko from '../image/berko.svg';
import dvok from '../image/dvok.svg';
import address from '../image/address.svg';
import telephone from '../image/telephone.svg';
import clock from '../image/clock.svg';
import message from '../image/message.svg';






class MainContainer extends React.Component {
    render() {
      return <div className="mainWrapper">
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
        <div className="blok2">
            <img className="white" src={white} alt={white}/>
            <div className="itemoll">
            <img className="item" src={item} alt={item}/>
            <img className="item" src={item} alt={item}/>
            <img className="item" src={item} alt={item}/>
            <img className="item" src={item} alt={item}/>
            </div>
        </div>
        <div className="blok3h2">
        <h2>наши самие большие проекти</h2>
        </div>
        <div className="blok3">
          <div className="image">
               <img className="stadium" src={stadium} alt={stadium}/>
               <img className="strip" src={strip} alt={strip}/>
               <h3>Газпром Арена</h3>
               <p>Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному еву.</p>
            </div>
            <div className="image">
               <img className="stadium" src={stadium} alt={stadium}/>
               <img className="strip" src={strip} alt={strip}/>
               <h3>Газпром Арена</h3>
               <p>Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному еву.</p>
            </div>
            <div className="image">
                <img className="stadium" src={stadium} alt={stadium}/>
                <img className="strip" src={strip} alt={strip}/>
                <h3>Газпром Арена</h3>
               <p>Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному еву.</p>
            </div>
        </div>
        <div className="blok4">
        <div className="text4">
        <h1 className="textblok4">САМЫЕ УМНЫЕ ПРОЕКТЫ </h1>
        <p className="textpblok4">РЕАЛИЗУЕМ САМЫЕ СМЕЛЫЕ РЕШЕНИЯ В РОССИИ!</p>
        </div>
        <img className="button" src={button} alt={button}/>
        </div>
        <div className="divblok5">
        <h1 className="hblok5">ЧЕМ МЫ ЗАНИМАЕМСЯ?</h1>
        </div>
        <div className="blok5">
          <div className="blok51">
          <div className="blok5image">
          <img className="building" src={building} alt={building}/>
          <p className="pblok5">СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ</p>
          </div>
          <div className="blok5image">
          <img className="building" src={building} alt={building}/>
          <p className="pblok5">СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ</p>
          </div>
          <div className="blok5image">
          <img className="building" src={building} alt={building}/>
          <p className="pblok5">СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ</p>
          </div>
          </div>
          <div className="blok52">
          <div className="blok5image">
          <img className="building" src={building} alt={building}/>
          <p className="pblok5">СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ</p>
          </div>
          <div className="blok5image">
          <img className="building" src={building} alt={building}/>
          <p className="pblok5">СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ</p>
          </div>
          <div className="blok5image">
          <img className="building" src={building} alt={building}/>
          <p className="pblok5">СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ</p>
          </div>
          </div>
          </div>
          <div className="blok6">
          </div>
          <div className="divblok7">
          <h1 className="hblok7">ОТВЕТЫ НА ВОПРОСЫ</h1>
          </div>
          <div className="blok7">
            <div className="blok711">
            <div className="blok71">
            <div>
          <img className="polygon" src={polygon} alt={polygon}/>
          <p className="pblok7">РАБОТАЕТЕ ЛИ ВЫ ПО 249 ФЗ?</p>
          </div>
          <p className="pblok71">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.</p>
          </div>
          <div className="blok71">
            <div>
          <img className="polygon" src={polygon} alt={polygon}/>
          <p className="pblok7">РАБОТАЕТЕ ЛИ ВЫ ПО 249 ФЗ?</p>
          </div>
          <p className="pblok71">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.</p>
          </div>
          <div className="blok71">
            <div>
          <img className="polygon" src={polygon} alt={polygon}/>
          <p className="pblok7">РАБОТАЕТЕ ЛИ ВЫ ПО 249 ФЗ?</p>
          </div>
          <p className="pblok71">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.</p>
          </div>
          <div className="blok71">
            <div>
          <img className="polygon" src={polygon} alt={polygon}/>
          <p className="pblok7">РАБОТАЕТЕ ЛИ ВЫ ПО 249 ФЗ?</p>
          </div>
          <p className="pblok71">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.</p>
          </div>
          </div>
          </div>
          <div className="blok8">
            <div className="divblok8">
          <h1 className="pblok8">наши партнеры</h1>
          </div>
            <div className="berko">
               <img className="berko1" src={berko} alt={berko}/>
               <img className="berko1" src={berko} alt={berko}/>
               <img className="berko1" src={berko} alt={berko}/>
               <img className="berko1" src={berko} alt={berko}/>
               <img className="berko1" src={berko} alt={berko}/>
            </div>
          </div>
          <div className="blok9">
            <h1 className="hblok9">отзывы о работе с нами</h1>
            <div className="blok911">
            <div className="blok912">
            <div className="blok91">
            <img className="dvok" src={dvok} alt={dvok}/>
            <p className="pblok9">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов</p>
             </div>
             <p className="pblok91"><span>Иванов Иван,</span> ООО “Газпром-Арена”</p>
             </div>
             <div className="blok912">
             <div className="blok91">
            <img className="dvok" src={dvok} alt={dvok}/>
            <p className="pblok9">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов</p>
             </div>
             <p className="pblok91"><span>Иванов Иван,</span> ООО “Газпром-Арена”</p>
             </div>
             <div className="blok912">
             <div className="blok91">
            <img className="dvok" src={dvok} alt={dvok}/>
            <p className="pblok9">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов</p>
             </div>
             <p className="pblok91"><span>Иванов Иван,</span> ООО “Газпром-Арена”</p>
             </div>
             </div>
          </div>
          <div className="blok10">
        <div className="text10">
        <h1 className="textblok10">ХОТИТЕ С НАМИ РАБОТАТЬ? </h1>
        <p className="textpblok10">ОСТАВЬТЕ ЗАЯВКУ И МЫ СВЯЖЕМСЯ С ВАМИ!</p>
        </div>
        <img className="button" src={button} alt={button}/>
        </div>
        <div className="blok11">
          <h1 className="hblok11">КОНТАКТЫ </h1>
          <div className="blok11ikon">
          <div className="blok112">
          <img className="address" src={address} alt={address}/>
          <h3 className="h1blok11">АДРЕС:</h3>
          <h3 className="h2blok11">НЕВСКИЙ ПРОСПЕКТ 140, ОФИС 140-142</h3>
          </div>
          <div className="blok112">
          <img className="telephone" src={telephone} alt={telephone}/>
          <h3 className="h1blok11">ТЕЛЕФОН:</h3>
          <h3 className="h2blok11">8 (812) 111-22-33 8 (812) 111-22-33</h3>
          </div>
          <div className="blok112">
          <img className="clock" src={clock} alt={clock}/>
          <h3 className="h1blok11">ВРЕМЯ РАБОТЫ: </h3>
          <h3 className="h2blok11">ПН-СБ 10:00 - 20:00</h3>
          </div>
          <div className="blok112">
          <img className="message" src={message} alt={message}/>
          <h3 className="h1message"> E-MAIL: </h3>
          <h3 className="h2message">INFO@VIP.RU</h3>
          </div>
          </div>
        </div>
        <div className="blok12">
        <p className="p1blok12">© 2019 Строительная компания</p>
        <p className="p2blok12">Разработано лучшей студей</p>
        </div>
        </div>
    }
  }

export default MainContainer;
  // eslint-disable-next-line