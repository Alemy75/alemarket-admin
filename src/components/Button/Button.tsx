import colors from 'const/colors'
import { ReactNode } from 'react'
import styled from 'styled-components'

interface I_ButtonProps {
    onClick?: (e: React.MouseEvent<HTMLElement>) => void
    children?: ReactNode
    type?: 'primary' | 'secondary' | 'ghost'
    block?: boolean
    disabled?: boolean
}

const Button = styled(
    ({
        children,
        type = 'primary',
        disabled,
        block = false,
        onClick = () => {},
        ...props
    }: I_ButtonProps) => (
        <button
            {...props}
            onClick={!disabled ? onClick : () => {}}
            type="button"
        >
            {children}
        </button>
    )
)`

    display: inline-flex;
    align-items: center;
    border-radius: 5px;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    padding: 10px 22px;
    letter-spacing: 0.36px;
    width: ${(props) => (props.block ? '100%' : 'fit-content')};
    justify-content: ${(props) => (props.block ? 'center' : 'initial')};
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    border: 1px solid ${(props) =>
        props.type === 'ghost' ? colors.primary : 'transparent'};
    background-color: ${(props) => {
        if (props.disabled) return '#c2c2c2'
        switch (props.type) {
            case 'primary':
                return colors.primary
            case 'secondary':
                return colors.secondary
            case 'ghost':
                return 'transparent'
            default:
                return colors.primary
        }
    }};
`

export default Button
