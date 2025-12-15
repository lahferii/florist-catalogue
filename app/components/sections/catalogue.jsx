import { ProductWrapper, ProductBox, MoreBox} from "../utils/products"

export default function Catalogue(){
    return(
        <section className="mb-20">
            <ProductWrapper title="Buket Uang">
                <ProductBox title="Nominal 50rb" price="64738"/>
                <ProductBox title="Nominal 100rb" price="64738"/>
                <ProductBox title="Nominal 200rb" price="64738"/>
                <ProductBox title="owidhjsc" price="64738"/>
                <MoreBox target="Buket Uang"/>
            </ProductWrapper>
            
            
            <ProductWrapper title="Fresh Flower">
                <ProductBox/>
                <ProductBox/>
                <ProductBox/>
                <ProductBox/>
                <MoreBox target="Fresh Flower"/>
            </ProductWrapper>
        </section>
    )
}