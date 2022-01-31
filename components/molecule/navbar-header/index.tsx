import classnames from 'classnames';
import React from 'react';
import { Navbar } from 'react-bootstrap';

import style from './style.module.scss';
import useTranslation from '../../../hooks/useTranslation';

const DudeNavbar = () => {

    const { translate } = useTranslation();
    return (
        <>
            <Navbar
                collapseOnSelect
                expand="xl"
                className={classnames(style['navbar-styling'], 'mx-5')}>
                <Navbar.Brand
                    href="/"
                    className='text-white body-5'
                >
                    {translate('NAVBAR_HEADER')}
                </Navbar.Brand>
            </Navbar>
        </>
    )
};

export default DudeNavbar;
