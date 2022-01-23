import classNames from 'classnames';
import React from 'react';
import { Container } from 'react-bootstrap';
import CardLeague from '../card-league';

import style from './style.module.scss';

const SideNavbarMenu = () => {
    return (
        <>
            <Container>
                <span className='body-4'>
                    Dude Clubs
                </span>
                <div className={classNames(style['max-with-styling'])}>
                    <CardLeague />
                </div>
            </Container>
        </>
    )
};

export default SideNavbarMenu;