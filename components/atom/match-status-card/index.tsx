import React from 'react';
import { Card } from 'react-bootstrap';
import { IStatus } from '../../../interface/status';

const MatchStatus: React.FC<IStatus> = ({
    teamName,
    score,
    status
}) => {
    return (
        <>
            <Card>
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
