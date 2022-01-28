import React, { useEffect } from 'react';
import { Card, Col, Row, Table } from 'react-bootstrap';
import { ICompetition } from '../../../interface/matches';
import MatchCardTable from '../../atom/matches-card';
import CardTier from '../card-tier';
import classNames from 'classnames';
import style from './style.module.scss'

interface IFootballTable {
    competitionData: ICompetition[];
}

const FootballTable: React.FC<IFootballTable> = ({
    competitionData
}) => {

    // console.log(competitionData);


    return (
        <>
            <Card>
                <Card.Body>
                    {/* TODO: useMap() here */}

                </Card.Body>
            </Card>
        </>
    );
};

export default FootballTable;
