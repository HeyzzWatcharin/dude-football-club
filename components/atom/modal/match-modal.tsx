import { useRouter } from 'next/router';
import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { ICompetitionDetail } from '../../../interface/competition';
import { IMatchesDetail } from '../../../interface/matches';
import { IModal } from '../../../interface/modal';
import { IWinnerType } from '../../../interface/winner';
import { convertStatusToText } from '../../../util/convertData';
import style from './style.module.scss';

const FootballDetailModal: React.FC<IModal> = ({
    show,
    onHide,
    className,
    matchData
}) => {

    console.log('Match Data --->', matchData);
    const router = useRouter();

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className={className}
        >
            <Modal.Body className="p-5">
                <p className='body-5 text-black'>
                    Home Team:
                    {' '}
                    <span
                        onClick={() => router.push(`/team/${matchData?.homeTeam.id}`)}
                        className='text-blue-sky pointer'
                    >
                        {matchData?.homeTeam.name}
                    </span>
                </p>
                <p className='body-5 text-black'>
                    Away Team:
                    {' '}
                    <span
                        onClick={() => router.push(`/team/${matchData?.awayTeam.id}`)}
                        className='text-blue-sky pointer'
                    >
                        {matchData?.awayTeam.name}
                    </span>
                </p>
                <p className='body-5 text-black'>
                    Status:
                    {' '}
                    <span className='text-blue-sky'>
                        {convertStatusToText(matchData?.status)}
                    </span>
                </p>
                <hr className='text-black' />
                <p className='body-5 text-black'>
                    Score Full Time:
                    {' '}
                    <span className='text-blue-sky'>
                        {matchData?.score.fullTime.homeTeam}
                        {' - '}
                        {matchData?.score.fullTime.awayTeam}
                    </span>
                </p>
                <p className='body-5 text-black'>
                    Winner:
                    {' '}
                    <span className='text-blue-sky'>
                        {matchData && matchData?.score.winner == IWinnerType.AWAY_WINNER ? matchData?.awayTeam.name : matchData?.score.winner == IWinnerType.HOME_WINNER ? matchData?.homeTeam.name : ('-')}
                    </span>
                </p>
            </Modal.Body>
        </Modal>
    );
};

export default FootballDetailModal;
