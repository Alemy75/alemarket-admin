import { FOOTER_HEIGHT, HEADER_HEIGHT } from 'const'
import colors from 'const/colors'
import { createGlobalStyle, styled } from 'styled-components'

export const AppStyles = createGlobalStyle`
    body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0;
        font-family: 'Comfortaa', cursive;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        color: ${colors.textcol}
        min-width: 320px;
        
    }

    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }

    a {
        color: inherit;
        text-decoration: inherit;
        color: ${colors.primary}
    }

    ul, li {
        list-style: none;
    }

    img {
        display: block;
    }

    tr,
    td,
    th,
    p,
    button,
    ul,
    li,
    h1, h2, h3, h4, h5, h6 {
        margin: 0;
        padding: 0;
    }

    h1, .h1 {
        font-size: 26px;
    }

    h2, .h2 {
        font-size: 22px;
    }

    h3, .h3 {
        font-size: 18px;
    }

    h4, .h4 {
        font-size: 16px;
    }

    p, li {
        line-height: 21px;
    }
`

export const PageWrapper = styled.div`
    padding: 20px;
    min-height: calc(100vh - ${HEADER_HEIGHT}px - ${FOOTER_HEIGHT}px);
`

export const Footer = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    background-color: ${colors.primary};
    color: white;
    height: ${FOOTER_HEIGHT}px;

    > :last-child {
        cursor: pointer;
        font-weight: 700;
    }
`

export const Rights = styled.span`
    font-weight: 500;
    opacity: 0.7;
`
