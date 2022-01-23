import classnames from 'classnames';
import React from 'react';
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import style from './style.module.scss';
import useTranslation from '../../../hooks/useTranslation';

interface ISearchInput {
    wording: string;
}

interface ISideMenu {
    // TODO: Centralize onSearch interface
    onSearch?: (search?: string | null, knowledgeCategoryId?: number) => void;
}

const schema = yup.object().shape({
    wording: yup.string(),
});

const DudeNavbar: React.FC<ISideMenu> = () => {

    const { setValue, reset } = useForm<ISearchInput>({
        resolver: yupResolver(schema),
    });

    const { translate } = useTranslation();

    // Note: Don't Forgot useDebounce() 300 ms.
    return (
        <>
            <Navbar
                collapseOnSelect
                expand="lg"
                className={classnames(style['navbar-styling'])}>
                <Container>
                    <Navbar.Brand href="#home" className='text-white'>
                        {translate('NAVBAR_HEADER')}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto my-2">
                            <Form.Control
                                onChange={(e) => {
                                    console.log('on searching ---->', e.target.value)
                                }}
                                className={classnames(style['search-input-styling'])}
                                type="text"
                                placeholder={translate('NAVBAR_HEADER_SEARCH_TEXT')}
                            />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
};

export default DudeNavbar;
