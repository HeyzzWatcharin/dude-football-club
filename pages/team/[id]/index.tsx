import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import client from '../../../util/client';
import style from './style.module.scss';
import classNames from 'classnames';
import { ITeamDetail } from '../../../interface/team-detail';
import Image from 'next/image';
import UnknownImage from '../../../public/images/Logo_of_AC_Milan.svg';
import dayjs from 'dayjs';
import 'dayjs/locale/th';
import timezone from 'dayjs/plugin/timezone';
import buddhistEra from 'dayjs/plugin/buddhistEra';
import utc from 'dayjs/plugin/utc';
import useTranslation from '../../../hooks/useTranslation';

const TeamDetail = () => {

    const router = useRouter();
    const id = router.query.id
    const [teamDetail, setTeamDetail] = useState<ITeamDetail>();
    const [loading, setLoading] = useState<boolean>(true);
    const { translate } = useTranslation();

    dayjs.extend(utc);
    dayjs.extend(timezone);
    dayjs.extend(buddhistEra);

    const getTeamDetail = () => {
        client
            .get(`/v2/teams/${id}`)
            .then((res: any) => {
                setLoading(false)
                setTeamDetail(res.data)
            })
            .catch((err: any) => {
                console.log('error -->', err);
            })
    }

    useEffect(() => {
        getTeamDetail()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router.query])


    if (loading) {
        return (
            <div className='d-flex justify-content-center w-100 h-100 mt-5'>
                <Spinner animation="grow" variant="danger" />
                <p className='body-7 ms-2 align-self-center'>
                    {translate('LOADING')}
                </p>
            </div>
        )
    }


    return (
        <>
            <Container fluid='lg' className='w-100 h-100'>
                <div className='d-flex justify-content-center'>
                    <Card className={classNames(style['card-team-styling'])}>
                        <Card.Body>
                            <div>
                                <div className='my-4 d-flex justify-content-center'>
                                    <Image
                                        src={teamDetail?.crestUrl ? teamDetail?.crestUrl : UnknownImage}
                                        width={180}
                                        height={180}
                                        alt='Club Image'
                                    />
                                </div>
                                <p className='body-5 text-black'>
                                    {translate('TEAM_NAME')}
                                    {' '}
                                    <span className='text-blue-sky body-5 ms-3'>
                                        {teamDetail?.name}
                                    </span>
                                </p>
                                <p className='body-5 text-black'>
                                    {translate('SHORT_NAME')}
                                    {' '}
                                    <span className='text-blue-sky body-5 ms-3'>
                                        {teamDetail?.shortName ? teamDetail?.shortName : "Unknow Data"}
                                    </span>
                                </p>
                                <p className='body-5 text-black'>
                                    {translate('CLUB_COLOR')}
                                    {' '}
                                    <span className='text-blue-sky body-5 ms-3'>
                                        {teamDetail?.clubColors ? teamDetail?.clubColors : 'Unknow Data'}
                                    </span>
                                </p>
                                <p className='body-5 text-black'>
                                    {translate('AREA')}
                                    {' '}
                                    <span className='text-blue-sky body-5 ms-3'>
                                        {teamDetail?.area.name ? teamDetail?.area.name : 'Unknow Data'}
                                    </span>
                                </p>
                                <p className='body-5 text-black'>
                                    {translate('TEAM_ADDRESS')}
                                    {' '}
                                    <span className='text-blue-sky body-5 ms-3'>
                                        {teamDetail?.address ? teamDetail?.address : 'Unknown Data'}
                                    </span>
                                </p>
                                <p className='body-5 text-black'>
                                    {translate('PHONE_NUMBER')}
                                    {' '}
                                    <span className='text-blue-sky body-5 ms-3'>
                                        {teamDetail?.phone ? teamDetail?.phone : 'Unknown Data'}
                                    </span>
                                </p>
                                <p className='body-5 text-black'>
                                    {translate('WEBISTE')}
                                    {' '}
                                    <span className='text-blue-sky body-5 ms-3'>
                                        {teamDetail?.website ? teamDetail?.website : 'Unknow Data'}
                                    </span>
                                </p>
                            </div>

                            <hr className='text-black' />

                            <div>
                                <p className='body-5 text-black'>
                                    {translate('TEAM_PLAYER')}
                                </p>
                                {teamDetail?.squad && teamDetail?.squad.length > 1 ? teamDetail?.squad.map((player, index) => {
                                    return (
                                        <>
                                            <Row className={classNames(style['row-player-styling'])}>
                                                <Col className="d-flex align-item-center my-3">
                                                    <p className='body-1 mb-0'>
                                                        {translate('NAME')}  {' '}
                                                        <span className='text-pink'>
                                                            {player.name ? player.name : ('Unknown')}
                                                        </span>
                                                    </p>
                                                </Col>
                                                <Col className="d-flex align-item-center my-3">
                                                    <p className='body-1 mb-0'>
                                                        {translate('NATIONALITY')} {' '}
                                                        <span className='text-pink'>
                                                            {player.nationality ? player.nationality : ('Unknown')}
                                                        </span>
                                                    </p>
                                                </Col>
                                                <Col className="d-flex align-item-center my-3">
                                                    <p className='body-1 mb-0'>
                                                        {translate('COUNTRY')} {' '}
                                                        <span className='text-pink'>
                                                            {player.countryOfBirth ? player.countryOfBirth : ('Unknown')}
                                                        </span>
                                                    </p>
                                                </Col>
                                                <Col className="d-flex align-item-center my-3">
                                                    <p className='body-1 mb-0'>
                                                        {translate('BIRTH_DATE')} {' '}
                                                        <span className='text-pink'>
                                                            {player.dateOfBirth ? dayjs(player.dateOfBirth).utc().locale('th').format('DD MMMM พ.ศ. BBBB') : ('Unknown')}
                                                        </span>
                                                    </p>
                                                </Col>
                                                <Col className="d-flex align-item-center my-3">
                                                    <p className='body-1 mb-0'>
                                                        {translate('POSITION_PLAYER')} {' '}
                                                        <span className='text-pink'>
                                                            {player.position ? player.position : ('Unknown')}
                                                        </span>
                                                    </p>
                                                </Col>
                                                <Col className="d-flex align-item-center my-3">
                                                    <p className='body-1 mb-0'>
                                                        {translate('SHIRT_NUMBER')} {' '}
                                                        <span className='text-pink'>
                                                            {player.shirtNumber ? player.shirtNumber : ('Unknown')}
                                                        </span>
                                                    </p>
                                                </Col>
                                            </Row>
                                        </>
                                    )
                                })
                                    :
                                    <p className='body-6 text-blue-sky text-center'>
                                        {translate('UNKNOW_DATA')}
                                    </p>
                                }

                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </>
    );
};

export default TeamDetail;
