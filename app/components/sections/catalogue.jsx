import { ProductWrapper, ProductBox, MoreBox} from "../utils/products"

export default function Catalogue(){
    return(
        <section className="mb-20">
            <ProductWrapper title="Buket Uang">
                <ProductBox title="Nominal 50rb" price="64738"/>
                <ProductBox title="Nominal 100rb" price="64738"/>
                <ProductBox title="Nominal 200rb" price="64738"/>
                <ProductBox title="owidhjsc" price="64738"/>
                <MoreBox/>
            </ProductWrapper>
            
            
            <ProductWrapper title="Category 2">
                <ProductBox/>
                <ProductBox/>
                <ProductBox/>
                <ProductBox/>
                <MoreBox/>
            </ProductWrapper>
        </section>
    )
}