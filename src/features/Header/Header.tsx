import { FC, useCallback, useState } from 'react'
import { Burger, LeftSide, SearchIconWrapper, SearchWrapper, Wrapper } from './styled'
import { useSelector } from 'react-redux'
import { selectIsLogged } from 'features/App/selectors'
import Button from 'components/Button/Button'
import Input from 'components/Input/Input'
import { ReactComponent as SearchIcon } from 'img/search.svg'

interface Header {}

const Header: FC<Header> = ({}) => {
    const isLogged = useSelector(selectIsLogged)

    const [searchInput, setSearchInput] = useState<string>('')

    const onChangeInput = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setSearchInput(event.target.value)
        },
        []
    )

    return (
        <Wrapper>
            <LeftSide>
                <h1>Alemarket</h1>
                <Button>
                    <Burger>
                        <div></div>
                        <div></div>
                        <div></div>
                    </Burger>
                    Каталог
                </Button>
            </LeftSide>
            <SearchWrapper>
                <Input block />
                <SearchIconWrapper>
                    <SearchIcon/>
                </SearchIconWrapper>
            </SearchWrapper>
        </Wrapper>
    )
}

export default Header
