import styled, { css }  from 'styled-components';

export const ButtonContainner = styled.button`
    background: #565656;
    border-radius: 22px;
    position: relative;

    color: #FFFF;
    padding: 2px 12px;
    min-width: 120px;
    width: 100%;

    ${({variant})=> variant !== "primary" && css `
        min-width: 167px;
        heigth: 275px;
        height: 33px;

        background: #E4105D;

        &:hover {
            opacity: 0.6;
            cursor: pointer;
        }
       
        &::affter {
            content: '';
            position: absolute;
            border: 1px solid #E4105D;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            heigth: calc (100% + 10px);
            border-radius: 22px;
        }
    `}
`