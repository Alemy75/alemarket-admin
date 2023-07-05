import { AppStyles, Footer, Rights } from 'App.styled'
import Header from 'features/Header/Header'
import { Suspense } from 'react'
import PrivateRoutes from 'routes/PrivateRoutes'
import PublicRoutes from 'routes/PublicRoutes'

export const App = () => {
    return (
        <>
            <AppStyles/>

            <Header />

            <Suspense fallback={'Loading..'}>
                {/* <PrivateRoutes /> */}
                <PublicRoutes />
            </Suspense>

            <Footer>
                <div>Alemarket</div>
                <Rights>
                Все права защищены
                </Rights>
            </Footer>
        </>
    )
}

export default App
