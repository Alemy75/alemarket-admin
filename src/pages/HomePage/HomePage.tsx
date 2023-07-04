import { PageWrapper } from 'App.styled'
import { FC } from 'react'
import { Helmet } from 'react-helmet'

const HomePage: FC = ({}) => {
    return (
        <>
            <Helmet>
                <title>Главная</title>
            </Helmet>
            <PageWrapper>
                <h1>Главная</h1>
            </PageWrapper>
        </>
    )
}

export default HomePage
