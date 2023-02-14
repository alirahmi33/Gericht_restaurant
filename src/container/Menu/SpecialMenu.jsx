import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits you palatte" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_juice flex__center">
        <p className="app__specialMenu-menu_heading"> Juice</p>
        <div className="app__specialMenu-menu_items">
          {data.juices.map((juice, index) => (
           <MenuItem key={juice.title + index} title={juice.title} price={juice.price} tags={juice.tags}/>
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_iceCream flex__center">
        <p className="app__specialMenu-menu_heading">IceCream</p>
        <div className="app__specialMenu-menu_items">
          {data.iceCreams.map((icecream, index) => (
             <MenuItem key={icecream.title + index} title={icecream.title} price={icecream.price} tags={icecream.tags}/>
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: '15px' }}>
      <button type="button" className="custom__button">View More</button>
    </div>
  </div>
);

export default SpecialMenu;
