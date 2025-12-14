import { ProductWrapper, ProductBox } from "../utils/products"

export default function Catalogue(){
    return(
        <section className="mb-20">
            <ProductWrapper title="Buket Uang">
                <ProductBox title="Nominal 50rb" price="64738"/>
                <ProductBox title="Nominal 100rb" price="64738"/>
                <ProductBox title="Nominal 200rb" price="64738"/>
                <ProductBox title="owidhjsc" price="64738"/>
                <ProductBox title="owidhjsc" price="64738"/>
            </ProductWrapper>
            
            {/* <div className="w-96 h-96 bg-rose-100 rounded-full absolute -left-52 top-56 blur-3xl bg-opacity-50 -z-10"></div> */}
            
            <ProductWrapper title="Category 2">
                <ProductBox/>
                <ProductBox/>
                <ProductBox/>
            </ProductWrapper>
        </section>
    )
}