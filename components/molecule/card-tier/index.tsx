import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CardLeagueImage from '../../atom/league-card';
import premierLeague from '../../../public/svg/premier-league-logo.svg';
import classNames from 'classnames';

import style from './style.module.scss';

interface ICardTier {
    data: ICardTierContent[];
}

interface ICardTierContent {
    id: number;
    tier: string;
}

const CardTier: React.FC<ICardTier> = ({
    data
}) => {

    return (
        <>
            <Container>
                {
                    data.map((data, index) => {
                        return (
                            <>
                                <Row key={index} className={classNames(style['league-styling'])}>
                                    <Col sm={1} className={classNames(style['league-img-styling'])}>
                                        <CardLeagueImage srcImg={premierLeague} width={36} height={36} />
                                    </Col>
                                    <Col className='p-0 ps-2' style={{
                                        marginTop: "inherit",
                                    }}>
                                        <p className={classNames(style['league-name-styling'], 'body-2')}>
                                            {data.tier}
                                            <br />
                                            <span className='body-1 text-smoke'>
                                                {/* Todo: Don't fotgot modify it!. */}
                                                England
                                            </span>
                                        </p>
                                    </Col>
                                </Row>
                            </>
                        )
                    })
                }
            </Container>
        </>
    )
};

export default CardTier;
