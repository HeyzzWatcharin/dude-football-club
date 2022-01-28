import React from 'react';
import style from './style.module.scss';
import classNames from 'classnames';
import Image from 'next/image'

interface ICompetitionCard {
    nameLeague?: string;
    areaName?: string;
    srcImg: any;
    onClick?: () => void;
}

const CompetitionLeagueCard: React.FC<ICompetitionCard> = ({
    nameLeague,
    areaName,
    srcImg,
    onClick
}) => {

    return (
        <div
            className={classNames(style['card-styling'],'my-2')}
            onClick={onClick}
        >
            <div className={classNames(style['img-styling'])}>
                <Image src={srcImg} width={130} height={140} alt='image-card-league' />
            </div>
            <div className="text-center">
                <p className='mb-0 text-black fw-bold'>
                    {nameLeague}
                </p>
                <p className='mb-0 text-black'>
                    {areaName}
                </p>
            </div>
        </div>
    );
};

export default CompetitionLeagueCard;
