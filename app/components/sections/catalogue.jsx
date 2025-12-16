import { LatestProductWrapper, ProductBox, MoreBox} from "../utils/products"

export default function Catalogue(){
    return(
        <section className="mb-20">
            <LatestProductWrapper title="Buket Uang">
                <ProductBox title="Nominal 5rb" price="75.000"/>
                <ProductBox title="Nominal 10rb" price="100.000"/>
                <ProductBox title="Nominal 50rb" price="250.000"/>
                <ProductBox title="Nominal 100rb" price="500.000"/>
                {/* <MoreBox target="Buket Uang"/> */}
            </LatestProductWrapper>
            
            
            <LatestProductWrapper title="Fresh Flower">
                <ProductBox title="Rafflesia Arnoldi" price="900.000"/>
                <ProductBox title="Tulip" price="10.000"/>
                <ProductBox title="Anggrek" price="10.000"/>
                <ProductBox title="Mawar" price="13.000"/>
                {/* <MoreBox target="Fresh Flower"/> */}
            </LatestProductWrapper>
        </section>
    )
}