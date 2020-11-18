import React, { Component } from 'react';
import '../Style/Header.css';
import Moment from 'moment';


class Header extends Component {
    
    render() { 
        let indonesia = require('moment/locale/id');
        Moment.updateLocale('id', indonesia);
        return ( 
            <div>
                <p>{Moment().format('dddd')}, {Moment().format('LLL')}</p>
            </div>
         );
    }
}
 
export default Header;