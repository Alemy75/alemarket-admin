import styled from 'styled-components'

import { Z_INDEX_LEVEL_2, HEADER_HEIGHT, Z_INDEX_LEVEL_3 } from 'const'
import colors from 'const/colors'

export const Wrapper = styled.div`
    padding: 14px 20px;
    display: flex;
    align-items: center;
    transition: margin 0.2s ease-out;
    background-color: ${colors.smooth};
    height: ${HEADER_HEIGHT}px;
    z-index: ${Z_INDEX_LEVEL_2};
    color: #fff;
`

export const LeftSide = styled.div`
    display: flex;
    align-items: center;
    h1 {
        color: ${colors.primary};
        margin-right: 20px;
    }
`

export const Burger = styled.div`
    width: 20px;
    height: 20px;
    padding: 4px 0;
    margin-right: 10px;

    div {
        position: relative;
        display: block;
        width: 18px;
        height: 2px;
        margin: 0 1px;
        background-color: #fff;
    }

    div:not(:first-child) {
        margin-top: 3px;
    }
`

export const SearchWrapper = styled.div`
    width: 100%;
    margin: 0 20px;
    position: relative;
`

export const SearchIconWrapper = styled.div`
    cursor: pointer;
    width: 30px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: ${Z_INDEX_LEVEL_3}
`

export const RightSide = styled.div``
