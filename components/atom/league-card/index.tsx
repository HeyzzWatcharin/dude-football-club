/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import style from './style.module.scss';

interface ICardImage {
    srcImg: any;
    width?: number | string;
    height?: number | string;
}

const CardLeagueImage: React.FC<ICardImage> = ({ srcImg, width, height }) => {
    return (
        <>
            <div className={classNames(style['league-img-styling'])}>
                <Image
                    src={srcImg}
                    width={width}
                    height={height}
                />
            </div>
        </>
    );
};

export default CardLeagueImage;
