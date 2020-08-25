import React from 'react';

import rohan from './rohan.jpg'


import {Contacts} from '../Contacts/Contacts';

import './sidenav.css';

export const SideNav = ({ handleSectionClick }) => {
    return (
        <div className="sidenav">
            <img 
            src={rohan} 
            className='avatar' 
            alt="avatar"
            />
            <h2 className="main-name">Rohan Singh</h2>
            <p className="subtitle">I love to develop</p>
            <div className="section-list">
                <p className="section-list-element" onClick={()=>handleSectionClick("about")}>About Me</p>
                <p className="section-list-element" onClick={()=>handleSectionClick("skills")}>Skills</p>
                <p className="section-list-element" onClick={()=>handleSectionClick("projects")}>Projects</p>
            </div>
            <div className="contacts">
                <Contacts />
            </div>
        </div>
        
    );
};