import React, { } from 'react';
import style from './style.module.scss';
import classNames from 'classnames';
import { Card, Col, Row } from 'react-bootstrap';
import dayjs from 'dayjs';
import 'dayjs/locale/th';
import timezone from 'dayjs/plugin/timezone';
import buddhistEra from 'dayjs/plugin/buddhistEra';
import utc from 'dayjs/plugin/utc';
import Image from 'next/image';
import Mockup from '../../../public/images/Logo_of_AC_Milan.svg'
import useTranslation from '../../../hooks/useTranslation';

interface IMatchesCard {
    name: string;
    dueDate?: Date;
    teamHome: string;
    teamAlways: string;
    onClick?: () => void;
    className?: string;
}

const MatchesCard: React.FC<IMatchesCard> = ({
    name,
    dueDate,
    teamHome,
    teamAlways,
    onClick,
    className
}) => {

    const { translate } = useTranslation();
    const width = 80;
    const height = 75;

    dayjs.extend(utc);
    dayjs.extend(timezone);
    dayjs.extend(buddhistEra);

    return (
        <div className={className}>
            <Card className={classNames(style['card-styling'])}>
                <Card.Body>
                    <Row>
                        <Col className='px-0 text-start'>
                            <Card.Text className='body-5 fw-bold text-blue'>
                                {name}
                            </Card.Text>
                        </Col>
                        <Col className='px-0 text-end'>
                            <Card.Text className='body-1 fw-bold text-blue'>
                                {dayjs(dueDate).utc().locale('th').format('DD MMMM เวลา HH:mm น.')}
                            </Card.Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='px-0 pt-4'>
                            <div className='text-center'>
                                <Image src={Mockup} height={width} width={height} alt='club-img' />
                            </div>
                            <Card.Text className='body-2 text-black pt-4 text-center'>
                                {teamHome}
                            </Card.Text>
                        </Col>
                        <Col sm={2} className='d-flex justify-content-center'>
                            <div className={classNames(style['vs-styling'])}>
                                <span className='body-3 text-black text-center fw-bold'>
                                    {translate('VS')}
                                </span>
                            </div>

                        </Col>
                        <Col className='px-0 pt-4'>
                            <div className='text-center'>
                                <Image src={Mockup} height={width} width={height} alt='club-img' />
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