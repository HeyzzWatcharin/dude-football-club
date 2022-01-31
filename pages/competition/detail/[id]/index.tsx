import classNames from 'classnames';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { ICompetitionDetailMatches } from '../../../../interface/competitions-detail';
import { IMatchesDetail } from '../../../../interface/matches';
import client from '../../../../util/client';
import style from './style.module.scss';
import dayjs from 'dayjs';
import 'dayjs/locale/th';
import timezone from 'dayjs/plugin/timezone';
import buddhistEra from 'dayjs/plugin/buddhistEra';
import utc from 'dayjs/plugin/utc';
import FootballDetailModal from '../../../../components/atom/modal/match-modal';
import { convertTierToText } from '../../../../util/convertData';
import useTranslation from '../../../../hooks/useTranslation';

const CompetitionDetail = () => {

  const [competitionDetail, setCompetitionDetail] = useState<ICompetitionDetailMatches>();
  const [matchesDetail, setMatchesDetail] = useState<IMatchesDetail[]>();
  const [dataSending, setDataSending] = useState<IMatchesDetail>();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();
  const id = router.query.id;
  const { translate } = useTranslation();


  // ***********************************************************************************
  // Note: For using utc, local, B.E DateTime.
  // ***********************************************************************************
  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.extend(buddhistEra);

  const getCompetitionMatches = () => {
    client
      .get(`/v2/competitions/${id}/matches`)
      .then((res: any) => {
        console.log('getCompetitionDetail matches reponse data --->', res.data);
        setCompetitionDetail(res.data)
        if (res.data) {
          setLoading(false)
          setMatchesDetail(res.data.matches)
        }
      })
      .catch((err: any) => {
        console.log('error -->', err);
      })
  }

  useEffect(() => {
    if (router.query.id) {
      getCompetitionMatches();
    }
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
        <div className='my-4'>
          <p className='body-5'>
            {translate('COMPETITION_NAME')}
            <span className='text-blue-sky body-5 ms-3'>
              {competitionDetail?.competition.name}
            </span>
          </p>
          <p className='body-5'>
            {translate('COMPETITON_PLAN')}
            <span className='text-blue-sky body-5 ms-3'>
              {convertTierToText(competitionDetail?.competition.plan)}
            </span>
          </p>
          <p className='body-5'>
            {translate('COMPETITION_AREA')}
            <span className='text-blue-sky body-5 ms-3'>
              {competitionDetail?.competition.area.name}
            </span>
          </p>
          <p className='body-5'>
            {translate('TOTAL_MATCH')}
            <span className='text-blue-sky body-5 ms-3'>
              {competitionDetail?.count}
              {' '}
              {translate('MATCH')}
            </span>
          </p>
        </div>

        <div className='mt-4'>
          {
            matchesDetail?.map((data, index) => {
              return (
                <>
                  <Card
                    className={classNames(style['card-match-styling'], 'my-2')}
                    key={index}
                  >
                    <Card.Body
                      onClick={() => {
                        setShowModal(true);
                        setDataSending(data)
                      }}
                    >
                      <Row>
                        <Col xs={6} sm={2}>
                          <span className='text-black'>
                            {dayjs(data.utcDate).utc().locale('th').format('DD MMMM พ.ศ. BBBB')}
                          </span>
                        </Col>
                        <Col xs={6} sm={2} className='xs-text-right'>
                          <span className='text-black'>
                            {dayjs(data.utcDate).utc().locale('th').format('เวลา HH:mm น.')}
                          </span>
                        </Col>
                        <Col xs={5} sm={3}>
                          <span className='text-black'>
                            {data.homeTeam.name}
                          </span>
                        </Col>
                        <Col xs={2} sm={2} className='text-center'>
                          <span className='text-pink'>
                            {translate('VS')}
                          </span>
                        </Col>
                        <Col xs={5} sm={3}>
                          <span className='text-black'>
                            {data.awayTeam.name}
                          </span>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </>
              )
            })
          }
          <FootballDetailModal
            show={showModal}
            onHide={() => setShowModal(false)}
            matchData={dataSending}
          />
        </div>
      </Container>
    </>
  );
};

export default CompetitionDetail;
