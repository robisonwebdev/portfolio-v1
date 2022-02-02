import React from 'react';
import Navlink from './Navlink';
import Title from './Title';
import '../../styles/Navigation/Navigation.css';

const Navigation = () => {
    return (
        <nav className='navigation'>
            <Title address='#home' title='David Robison' />
            <ul className='navigation_links'>
                <Navlink address='#projects' text='Projects' />
                <Navlink address='#skills' text='Skills' />
                <Navlink address='#contact' text='Contact' />
            </ul>
        </nav>
    );
};

export default Navigation;
