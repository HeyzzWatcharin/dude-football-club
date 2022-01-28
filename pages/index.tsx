import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import MatchesCard from '../components/molecule/matches-card'
import { ICompetitionDetail } from '../interface/competition'
import { IMatchesDetail } from '../interface/matches'
import client from '../util/client'
import ligaNOS from '../public/svg/liga_nos.svg'
import CompetitionLeagueCard from '../components/molecule/competitions-card'
import useTranslation from '../hooks/useTranslation'
const Home: NextPage = () => {

  const router = useRouter();
  const { translate } = useTranslation();
  const [matchesToday, setMatchesToday] = useState<IMatchesDetail[]>();
  const [competitions, setCompetitions] = useState<ICompetitionDetail[]>([]);

  const getMatcheTodays = () => {
    client
      .get('/v2/matches')
      .then((res: any) => {
        console.log('getMatcheTodays reponse data --->', res.data.matches);
        if (res.data) {
          setMatchesToday(res.data.matches)
        }

      })
      .catch((err: any) => {
        console.log('error -->', err);
      })
  }

  const getCompetitionAvaliable = () => {
    const id: number[] = [2013, 2015, 2017, 2018, 2152]
    id.map((dataId, index) => {
      client
        .get(`/v2/competitions/${dataId}`)
        .then((res: any) => {
          console.log(res.data);

          if (competitions) {
            competitions.push(res.data)
          }

        })
        .catch((err: any) => {
          console.log('error -->', err);
        })
    })

  }

  // const competitionAvaliableId: number[] = [
  // 2026, no
  // 2001, no
  // 2012, no
  // 2013,
  // 2101, no
  // 2015,
  // 2085, no
  // 2017,
  // 2018,
  // 2019,
  // 2084, no
  // 2152
  // ]

  useEffect(() => {
    getMatcheTodays();
    getCompetitionAvaliable();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <>
      <div className='mx-5'>

        {/* Note: Don't forget move to components */}
        <Row>
          {
            matchesToday?.map((data, index) => {
              return (
                <>
                  <div className='my-2'>
                    <span className="header-2">
                      {translate('MATCH_TO_DAY')}
                    </span>
                  </div>
                  <Col className='overflow-auto px-0 d-flex justify-content-center' sm={5} key={index}>
                    <div className='my-3' >
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

        <Row className='my-4'>
          <div className='my-2'>
            <span className="header-2">
              {translate('FOOTBALL_LEAGUE')}
            </span>
          </div>

          {
            competitions.map((data, index) => {
              return (
                <Col key={index} xs={12} sm='auto' md='auto' className="px-2">
                  <CompetitionLeagueCard
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
      </div >
    </>
  )
}

export default Home
