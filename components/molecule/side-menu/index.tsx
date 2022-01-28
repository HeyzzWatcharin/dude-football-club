import classNames from 'classnames';
import React from 'react';
import { Card, Container } from 'react-bootstrap';
import useTranslation from '../../../hooks/useTranslation';
import { tierRank } from '../../../interface/tier';
import CardTier from '../card-tier';

import style from './style.module.scss';

const SideNavbarMenu = () => {

    const { translate } = useTranslation();

    return (
        <>
            <div>
                <Card className={classNames(style['card-sidenav-styling'])}>
                    <span className='header-5'>
                        {translate('FOOTBALL_LEAGUE')}
                    </span>
                    <div className={classNames(style['max-with-styling'])}>
                        <CardTier data={tierRank} />
                    </div>
                </Card>
            </div>
        </>
    )
};

export default SideNavbarMenu;