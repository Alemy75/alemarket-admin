import colors from 'const/colors'
import styled from 'styled-components'

interface I_InputProps {
    placeholder?: string;
    type?: 'text' | 'checkbox' | 'select'
    block?: boolean
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = styled(
    ({
        placeholder,
        type = 'text',
        block = false,
        onChange = () => {},
        ...props
    }: I_InputProps) => (
        <input
            onChange={onChange}
            {...props}
        />
    )
)`
    all: unset;
    border: 1px solid ${colors.primary};
    width: ${(props) => (props.block ? 'calc(100% - 50px)' : 'fit-content')};
    border-radius: 5px;
    font-size: 14px;
    font-weight: 500;
    padding: 10px 10px;
    padding-right: 40px;
    letter-spacing: 0.36px;
    color: ${colors.textcol};
    transition: outline 0.3s ease;
    outline: 3px solid ${colors.primary + '00'};
    &:focus {
        outline: 3px solid ${colors.primary + '50'};
    }
`

export default Input