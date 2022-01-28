import React, { useEffect } from 'react';
import style from './style.module.scss';
import classNames from 'classnames';
import { Button, Card, Col, Row } from 'react-bootstrap';
import TeamMatchesCard from './team-card';
import { IMatchesDetail, IMatchesDetailData } from '../../../interface/matches';
import dayjs from 'dayjs';
import 'dayjs/locale/th';
import timezone from 'dayjs/plugin/timezone';
import buddhistEra from 'dayjs/plugin/buddhistEra';
import utc from 'dayjs/plugin/utc';
import Image from 'next/image';
import Mockup from '../../../public/images/Logo_of_AC_Milan.svg'

interface IMatchesCard {
    name: string;
    dueDate: Date;
    teamHome: string;
    teamAlways: string;
}

const MatchesCard: React.FC<IMatchesCard> = ({
    name,
    dueDate,
    teamHome,
    teamAlways
}) => {
    // console.log('DueDate -->', dueDate);

    dayjs.extend(utc);
    dayjs.extend(timezone);
    dayjs.extend(buddhistEra);

    return (
        <div>
            <Card className={classNames(style['card-styling'])}>
                <Card.Body>
                    <Row>
                        <Col className='px-0 text-start'>
                            <Card.Text className='body-5 fw-bold text-blue'>
                                {name}
                            </Card.Text>
                        </Col>
                        {/* <Col className='px-0 text-end'>
                            <Card.Text className='body-3 fw-bold text-blue'>
                                {dayjs(dueDate).locale('th').format('DD/MM/YYYY')}
                            </Card.Text>
                        </Col> */}
                    </Row>
                    <Row>
                        <Col className='px-0 pt-4'>
                            <div className='text-center'>
                                <Image src={Mockup} height={80} width={75} alt='club-img' />
                            </div>
                            <Card.Text className='body-2 text-black pt-4 text-center'>
                                {teamHome}
                            </Card.Text>
                        </Col>
                        <Col sm={2} className='d-flex justify-content-center'>
                            <div className={classNames(style['vs-styling'])}>
                                <span className='body-3 text-black text-center fw-bold'>
                                    VS
                                </span>
                            </div>

                        </Col>
                        <Col className='px-0 pt-4'>
                            <div className='text-center'>
                                <Image src={Mockup} height={80} width={75} alt='club-img' />
                            </div>
                            <Card.Text className='body-2 text-black pt-4 text-center'>
                                {teamAlways}
                            </Card.Text>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div >
    );
};

export default MatchesCard;