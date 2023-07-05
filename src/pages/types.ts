export interface I_ProductDetails {
    id: number
    slug?: string
    imgSrc: string
    priceRegular: number
    priceDiscounter?: number
    title: string
    desc: string
}