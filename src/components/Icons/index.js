import React from 'react';
import './index.css';
import Pin from './icons/pin.jsx';
import Tweeter from './icons/tweeter.jsx';
import MoneyBag from './icons/money-bag';
import Messenger from './icons/messenger';
import Calendar from './icons/calendar';
import Instagram from './icons/instagram';
import Facebook from './icons/facebook';
import ArrowUp from './icons/arrowUp';
import Map from './icons/map';
import MenuToggler from './icons/menu-toggler';
const Icon = (props) => {
  switch (props.name) {
    case 'menu-toggler':
      return <MenuToggler {...props} />;
    case 'pin':
      return <Pin {...props} />;
    case 'tweeter':
      return <Tweeter {...props} />;
    case 'money-bag':
      return <MoneyBag {...props} />;
    case 'messenger':
      return <Messenger {...props} />;
    case 'calendar':
      return <Calendar {...props} />;
    case 'instagram':
      return <Instagram {...props} />;
    case 'facebook':
      return <Facebook {...props} />;
    case 'arrow-up':
      return <ArrowUp {...props} />;
    case 'map':
      return <Map {...props} />;
    default:
      return;
  }
};
export default Icon;
