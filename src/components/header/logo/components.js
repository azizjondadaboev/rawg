import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const LogoImage = styled.img`
    display: block;
    max-height: 64px;
    cursor: pointer;

    @media (max-width: 599px) {
        max-height: 48px;
    }
`;

export const IataLogoImage = styled.img`
    display: block;
    max-height: 64px;
    margin-left: 32px;

    @media (max-width: 599px) {
        margin-left: 16px;
        max-height: 40px;
    }
`;
