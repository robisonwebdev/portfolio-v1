import React from 'react';

const Icon = ({ address, icon }) => {
    return (
        <a href={address} target='_blank'>
            <i className={icon} />
        </a>
    );
};

export default Icon;
