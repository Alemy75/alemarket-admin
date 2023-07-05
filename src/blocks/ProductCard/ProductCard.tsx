import { FC, useState } from 'react'
import {
    Wrapper,
    Image,
    PriceWrapper,
    Title,
    Description,
    CurrentPrice,
    OldPrice,
    LikeWrapper,
} from './styled'
import { ReactComponent as EmptyLike } from 'img/empty-like.svg'
import { ReactComponent as FilledLike } from 'img/filled-like.svg'
import { Link } from 'react-router-dom'
import Button from 'components/Button/Button'

export interface I_ProductCardProps {
    id: number
    slug?: string
    imgSrc: string
    priceRegular: number
    priceDiscounter?: number
    title: string
    desc: string
}

const ProductCard: FC<I_ProductCardProps> = (props) => {
    const [isLiked, setIsLiked] = useState(true)

    const likeHandler = () => {
        setIsLiked(prev => !prev)
    }

    return (
        <Wrapper>
            <LikeWrapper onClick={likeHandler}>
                {!isLiked ? <FilledLike/> : <EmptyLike/>}
            </LikeWrapper>

            <Link to={`product/${props.slug || props.id}`}>
                <Image src={props.imgSrc} />
            </Link>

            <PriceWrapper>
                {Number.isInteger(props.priceDiscounter) ? (
                    <>
                        <CurrentPrice>{props.priceDiscounter} ₽</CurrentPrice>
                        <OldPrice>{props.priceRegular} ₽</OldPrice>
                    </>
                ) : (
                    <CurrentPrice>{props.priceRegular} ₽</CurrentPrice>
                )}
            </PriceWrapper>

            <Title className="h4">
                <Link to={`product/${props.slug || props.id}`}>
                    {props.title}
                </Link>
            </Title>

            <Description>{props.desc}</Description>
            <Button type='primary'>В корзину</Button>
            
        </Wrapper>
    )
}

export default ProductCard
