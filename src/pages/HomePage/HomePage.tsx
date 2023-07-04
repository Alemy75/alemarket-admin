import { PageWrapper } from 'App.styled'
import { FC } from 'react'
import { Helmet } from 'react-helmet'
import { ProductGroup, ProductGroupContainer } from './styled'
import { dummyProducts } from 'pages/dummyProducts'
import ProductCard from 'blocks/ProductCard/ProductCard'

const HomePage: FC = ({}) => {
    return (
        <>
            <Helmet>
                <title>Главная</title>
            </Helmet>
            <PageWrapper>
                <ProductGroup>
                    <h1>Главная</h1>
                    <ProductGroupContainer>
                        {dummyProducts.map(product => (
                            <ProductCard
                                {...product}
                                key={product.id}
                            />
                        ))}
                    </ProductGroupContainer>
                </ProductGroup>
            </PageWrapper>
        </>
    )
}

export default HomePage
