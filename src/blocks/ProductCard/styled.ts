import colors from 'const/colors'
import styled from 'styled-components'

export const Wrapper = styled.div`
    padding: 15px;
    position: relative;
`

export const Image = styled.img`
    width: 100%;
    height: 165px;
    border-radius: 4px;
    object-fit: scale-down;
    margin-bottom: 10px;
`

export const CurrentPrice = styled.div`
    color: ${colors.primary};
    margin-right: 10px;
    font-size: 18px;
    font-weight: 700;
`

export const OldPrice = styled.span`
    color: ${colors.discount};
    text-decoration: line-through
`

export const PriceWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    flex-direction: start;
    margin-bottom: 10px;
`

export const Title = styled.h3`
    color: ${colors.primary};
    margin-bottom: 10px;
`

export const Description = styled.div`
    margin-bottom: 20px;
`

export const LikeWrapper = styled.div`
    cursor: pointer;
    width: 30px;
    height: 30px;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {   
        pointer-events: none;
    }
`
