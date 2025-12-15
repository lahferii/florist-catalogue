export default function Contact(){
    return(
        <section className="mb-20 relative border-2 border-rose-500 p-1">
            <div className="w-full h-full bg-rose-500 py-20">
                <article className="mb-5 px-5 sm:px-0 text-center text-white">
                    <h2 className="text-2xl sm:text-3xl tracking-wider">Ingin Mengenal Kami Lebih Dekat?</h2>
                </article>

                <article className="flex flex-col sm:flex-row gap-5 justify-center">
                    <div className="text-center">
                        <button className="btn-secondary border-2 border-rose-500 sm:py-2 w-56">
                            Hubungi Kami
                        </button>
                    </div>
                    <div className="text-center">
                        <button className="btn-secondary bg-rose-500 sm:py-2 w-56 border-2 border-white text-white">
                            Lihat Kami Di Shopee
                        </button>
                    </div>
                </article>
            </div>
        </section>
    )
}