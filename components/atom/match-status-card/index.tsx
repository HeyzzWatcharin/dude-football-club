import React from 'react';
import { Card } from 'react-bootstrap';
import classNames from 'classnames';
import style from './style.module.scss';

interface IStatus {
    teamName: string;
    score: number;
    status?: number;
}

const MatchStatus: React.FC<IStatus> = ({
    teamName,
    score,
    status
}) => {
    return (
        <>
            <Card className={classNames(style['card-match-table-styling'])}>
                <Card.Body>
                    <Card.Text className='body-2'>
                        {teamName}
                    </Card.Text>
                    <Card.Text className='body-5'>
                        {score}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
};

export default MatchStatus;
