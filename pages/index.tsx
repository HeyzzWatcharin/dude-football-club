import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'
import MatchesCard from '../components/molecule/matches-card'
import { ICompetitionDetail } from '../interface/competition'
import { IMatchesDetail } from '../interface/matches'
import client from '../util/client'
import ligaNOS from '../public/svg/liga_nos.svg'
import CompetitionLeagueCard from '../components/molecule/competitions-card'
import useTranslation from '../hooks/useTranslation'
import FootballDetailModal from '../components/atom/modal/match-modal'
import { isBrowser } from '../util/content'

const Home: NextPage = () => {

  const router = useRouter();
  const { translate } = useTranslation();
  const [matchesToday, setMatchesToday] = useState<IMatchesDetail[]>();
  const [competitions, setCompetitions] = useState<ICompetitionDetail[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [dataSending, setDataSending] = useState<IMatchesDetail>();
  const [loading, setLoading] = useState<boolean>(true);

  const reveal = () => {
    if (!isBrowser()) {
      return;
    }

    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach((reveal, index) => {
      //**********************************************************************************
      // getBoundingClientRect().top gives us this distance from the top of the viewport
      // and window.innerHeight will give us the height of the viewport.
      //**********************************************************************************
      const windowHeight = window.innerHeight;
      const elementTop = reveal.getBoundingClientRect().top;
      const elementVisible = 150;
      //**********************************************************************************
      // elementVisible is the number of height we want
      // to start reveal content from top
      //**********************************************************************************
      if (elementTop < windowHeight - elementVisible) {
        reveal.classList.add('active');
      }
    });
  };

  useEffect(() => {
    if (isBrowser()) {
      reveal();
      //**********************************************************************************
      // Add event listener into this component and also remove it
      //**********************************************************************************
      window.addEventListener('scroll', reveal);
      return () => window.removeEventListener('scroll', reveal);
    }
  }, []);

  const getMatcheTodays = () => {
    setLoading(true);
    client
      .get('/v2/matches')
      .then((res: any) => {
        if (res.data) {
          setLoading(false);
          setMatchesToday(res.data.matches)
        }

      })
      .catch((err: any) => {
        console.log('error -->', err);
      })
  }

  const getCompetitionAvaliable = () => {

    //**********************************************************************************
    // const id: number[] = [2000, 2001, 2002, 2013, 2014, 2015, 2017, 2016, 2018, 2152]
    //**********************************************************************************

    setLoading(true);
    const id: number[] = [2000, 2013, 2015, 2017, 2018, 2152]

    id.map((dataId, index) => {
      client
        .get(`/v2/competitions/${dataId}`)
        .then((res: any) => {
          if (competitions) {
            setLoading(false);
            competitions.push(res.data)
          }

        })
        .catch((err: any) => {
          console.log('error -->', err);
        })
    })

  }

  useEffect(() => {
    getMatcheTodays();
    getCompetitionAvaliable();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
      <Row className="mx-5">
        <div className='my-2'>
          <span className="header-2">
            {translate('MATCH_TO_DAY')}
          </span>
        </div>
        {
          matchesToday?.map((data, index) => {
            return (
              <>
                <Col
                  className='overflow-auto px-0 d-flex justify-content-center'
                  sm={12}
                  md={6}
                  key={index}

                >
                  <div className='my-3' onClick={() => {
                    console.log('Fuck You');
                    setShowModal(true)
                    setDataSending(data)
                  }}>
                    <MatchesCard
                      name={data.competition.name}
                      dueDate={data.utcDate}
                      teamHome={data.homeTeam.name}
                      teamAlways={data.awayTeam.name}
                    />
                  </div>
                </Col>
              </>
            )
          })
        }
      </Row>

      <Row className='my-4 reveal mx-5'>
        <div className='my-2'>
          <span className="header-2">
            {translate('FOOTBALL_LEAGUE')}
          </span>
        </div>

        {
          competitions.map((data, index) => {
            return (
              <Col key={index} xs={12} sm='auto' md='auto' className="px-2 d-flex justify-content-center">
                <CompetitionLeagueCard
                  className={"reveal"}
                  onClick={() => router.push(`/competition/detail/${data.id}`)}
                  nameLeague={data?.name}
                  areaName={data?.area.name}
                  srcImg={data.emblemUrl ? data.emblemUrl : ligaNOS}
                />
              </Col>
            )
          })
        }
      </Row>

      <FootballDetailModal
        show={showModal}
        onHide={() => setShowModal(false)}
        matchData={dataSending}
      />
    </ >
  )
}

export default Home
