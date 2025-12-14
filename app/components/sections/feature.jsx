import BoxFeatures from "../utils/boxFeatures"

export default function Feature(){
    return(
        <section>
            <article className="mb-5 text-center">
                <h2 className="text-3xl tracking-wider mb-2">Mengapa Pilih  Lorem Ipsum?</h2>
                <p>Kami berkomitmen memberikan pelayanan terbaik dengan kualitas premium</p>
            </article>
            <section className="w-full flex justify-center flex-col sm:flex-row flex-wrap mb-10">
                <BoxFeatures boxTitle="" boxDetail=""/>
                <BoxFeatures boxTitle="" boxDetail=""/>
                <BoxFeatures boxTitle="" boxDetail=""/>
            </section>
        </section>
    )
}