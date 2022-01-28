import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { ICompetitionDetail } from '../../../interface/competition';
import style from './style.module.scss';

interface IModal {
    show: boolean;
    onHide: () => void;
    className?: string;
    competitionData?: ICompetitionDetail;
}

const FootballDetailModal: React.FC<IModal> = ({
    show,
    onHide,
    className,
    competitionData
}) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className={className}
        >
            <Modal.Body>
                <h4 className='text-black'>
                    {competitionData?.name}
                </h4>
                <p className='text-black'>
                    area: {competitionData?.area.name}
                    <br />
                    
                </p>
            </Modal.Body>
        </Modal>
    );
};

export default FootballDetailModal;
