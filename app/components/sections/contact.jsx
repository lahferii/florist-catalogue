export default function Contact(){
    return(
        <section className="mb-20 relative border-2 border-rose-500 p-1">
            <div className="w-full h-full bg-rose-500 py-20">
                <article className="mb-5 text-center text-white">
                    <h2 className="text-3xl tracking-wider mb-2">Ingin Mengenal Kami Lebih Dekat?</h2>
                    <p>Kami berkomitmen memberikan pelayanan terbaik dengan kualitas premium</p>
                </article>

                <article className="flex flex-row gap-5 justify-center">
                    <div>
                    <button className="btn-secondary border-2 border-rose-500 py-2 px-5">Hubungi Kami</button>
                    </div>
                    <div>
                    <button className="btn-secondary bg-rose-500 py-2 border-2 border-white text-white">Lihat Kami Di Shopee</button>
                    </div>
                </article>
            </div>
        </section>
    )
}