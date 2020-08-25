import React from 'react';


import linkedin from './linkedin.png';
import github from './logo.png';
import facebook from './facebook.png';

import {contacts} from '../../constants/Contact';

import './contacts.css';


export const Contacts = () => {
    return(
        <div className="contacts">
            <a href={contacts.linkedin}><img src={linkedin} className="icon" alt="linkedin"/></a>
            <a href={contacts.github}><img src={github} className="icon" alt="github"/></a>
            <a href={contacts.facebook}><img src={facebook} className="icon" alt="facebook"/></a>
        </div>
    )
}