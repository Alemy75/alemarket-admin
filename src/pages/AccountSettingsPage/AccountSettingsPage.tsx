import { PageWrapper } from 'App.styled'
import { FC } from 'react'
import { Helmet } from 'react-helmet'

const AccountSettingsPage: FC = ({}) => {
    return (
        <>
            <Helmet>
                <title>Настройки аккаунта</title>
            </Helmet>
            <PageWrapper>
                <h1>Настройки аккаунта</h1>
            </PageWrapper>
        </>
    )
}

export default AccountSettingsPage