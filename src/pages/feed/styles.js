import styled from "styled-components";

export const Container = styled.main `
    height: auto;
    max-width: 95%;
    width: 100%;
    margin: 0 auto;
    margin-top: 50px;
    
    display: flex;
    flex-direction: row;
    align-items: flex-start;

`

export const Title = styled.h3 `
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-heighht: 25px;
    color: #FFFFFF;
    margin-bottom: 24px;
`

export const TitleHighlight = styled.h3 `
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-heighht: 25px;
    color: #FFFFFF;
    margin-bottom: 24px;
`

export const LeftColumn = styled.div `
    width: 70%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

export const RightColumn = styled.div `
    width: 30%;
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-end;

    
`
