import styled from "styled-components";

export const Container = styled.main `
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;
    
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
    width: 320px;
    margin-bottom: 20px;
    line-heighht: 44px;
    color: #FFFFFF;
`

export const TitleLogin = styled.p `
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 20px;
    line-heighht: 44px;
`

export const SubtitleLogin = styled.p `
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 35px;
    line-heighht: 25px;
`

export const EsqueciText = styled.p `
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-heighht: 19px;
    color: #e5e044;
`

export const CriarText = styled.p `
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-heighht: 19px;
    color: #e23dd7;
`




