import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { ICompetitionDetail } from '../../../../interface/competition';
import client from '../../../../util/client';

const CompetitionDetail = () => {

  const [competitionDetail, setCompetitionDetail] = useState<ICompetitionDetail>();
  const router = useRouter();

  const getCompetitionDetail = () => {
    client
      .get(`/v2/competitions/2006`)
      .then((res: any) => {
        console.log('getCompetitionDetail reponse data --->', res.data);
        // setCompetitionDetail(res.data.competitions)

      })
      .catch((err: any) => {
        console.log('error -->', err);
      })
  }

  useEffect(() => {
    if (router.query.id) {
      getCompetitionDetail();
    }

  }, [router.query])


  return (
    <>

    </>
  );
};

export default CompetitionDetail;
