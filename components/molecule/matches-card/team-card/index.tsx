import React from 'react';

import Image from 'next/image';
import Mockup from '../../../../public/images/Logo_of_AC_Milan.svg'

const TeamMatchesCard = () => {
    return (
        <>
            <div>
                <Image src={Mockup} height={80} width={75} />
            </div>
        </>
    );
};

export default TeamMatchesCard;
