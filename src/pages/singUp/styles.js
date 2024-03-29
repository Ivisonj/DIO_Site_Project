import styled from "styled-components";

export const Container = styled.main `
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Wrapper = styled.div `
    max-width: 400px;
`

export const LeftColumn = styled.div `
    flex: 1;
    width: 500px;
    display: flex;
    justify-content: flex-start;
`

export const RightColumn = styled.div `
    flex: 1;
    width: 500px;
    display: flex;
    justify-content: flex-end;
`

export const Row = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`

export const Title = styled.h2 `
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    max-width: 70%;
    margin-bottom: 20px;
    line-height: 44px;

    color: #FFFFFF;
`

export const TitleCadastre = styled.p `
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
    margin-bottom: 8px;
    margin-top: 100px;

    color: #FFFFFF;
`

export const SubTitleCadastre = styled.p `
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 35px;

    color: #FFFFFF;
`

export const FazerLogin = styled.p `
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    
    color: #FFFFFF;
`

export const Link = styled.a `
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: #23DD7A;
    text-decoration: none;
`

export const CriarText = styled.p `
    max-width: 275px;
    
`