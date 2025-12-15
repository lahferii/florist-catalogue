function ArticleWrapper({children}){
    return(
        <section className="w-full flex flex-col lg:flex-row gap-10">
            <div className="lg:w-3/4 xl:max-w-3xl">
                {children}
            </div>
            <div className="flex-1">
                <div className="lg:sticky lg:top-24">
                    <article className="mb-10">
                        <h2 className=" text-xl tracking-wider mb-2">Artikel Terbaru</h2>

                        <ul className="">
                            <li className="hover:text-rose-500 cursor-pointer duration-300 mb-2">
                                Cara Membuat Ketupat Lembu
                            </li>
                            <li className="hover:text-rose-500 cursor-pointer duration-300 mb-2">
                                Cara Membuat Ayam Goreng Crispy Meskipun Tidak Punya Ayam Dan Kompor
                            </li>
                            <li className="hover:text-rose-500 cursor-pointer duration-300 mb-2">
                                Mencari Makna Hidup Melalui Permainan Online Mobile Legends Bang-bang
                            </li>
                        </ul>
                    </article>


                    <article className="mb-5">
                        <h2 className=" text-xl tracking-wider mb-2">Kategori</h2>

                        <ul className="">
                            <li className="hover:text-rose-500 cursor-pointer duration-300 mb-2">Trivia</li>
                            <li className="hover:text-rose-500 cursor-pointer duration-300 mb-2">Kesehatan</li>
                            <li className="hover:text-rose-500 cursor-pointer duration-300 mb-2">Sejarah</li>
                        </ul>
                    </article>
                </div>
            </div>
        </section>
    )
}

function Article({path, title, excerpt, date, slug}){
    return(
        <div className="mb-10 flex justify-between group cursor-pointer">
            <article className="md:w-2/3 pr-5">
                <h2 className="text-xl md:text-2xl tracking-wider mb-2 group-hover:text-rose-500 duration-300">
                    {title
                        .split(" ")
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
                </h2>
                <p className="tracking-wide leading-relaxed mb-5">
                    {
                        excerpt.split(" ").slice(0, 10).join(" ")
                    }
                </p>

                <span className="tracking-wider text-sm text-gray-700">{date}</span>
            </article>

            <div className="w-24 h-24 md:w-44 md:h-44 bg-black flex-shrink-0"></div>

        </div>
    )
}

export { ArticleWrapper, Article}