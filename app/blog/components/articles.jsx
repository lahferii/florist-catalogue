function ArticleWrapper({children}){
    return(
        <section className="w-full flex flex-col lg:flex-row gap-10">
            <div className="flex-[2]">
                {children}
            </div>
            <div className="flex-1">
                <div className="sticky top-24">
                    <article className="mb-5">
                        <h2 className=" text-xl tracking-wider mb-2">Artikel Terbaru</h2>

                        <ul className="flex flex-wrap gap-2">
                            <li className="hover:shadow-lg hover:-translate-y-1 cursor-pointerw duration-300 w-full border-2 border-rose-500 flex-shrink-0 py-2 px-2 inline-block">
                                Cara Membuat Ketupat Lembu
                            </li>
                            <li className="hover:shadow-lg hover:-translate-y-1 cursor-pointer duration-300 w-full border-2 border-rose-500 flex-shrink-0 py-2 px-2 inline-block">
                                Cara Membuat Ayam Goreng Crispy Meskipun Tidak Punya Ayam Dan Kompor
                            </li>
                            <li className="hover:shadow-lg hover:-translate-y-1 cursor-pointer duration-300 w-full border-2 border-rose-500 flex-shrink-0 py-2 px-2 inline-block">
                                Mencari Makna Hidup Melalui Permainan Online Mobile Legends Bang-bang
                            </li>
                        </ul>
                    </article>

                    <article className="mb-5">
                        <h2 className=" text-xl tracking-wider mb-2">Tahun</h2>

                        <ul className="flex flex-wrap gap-2">
                            <li className="hover:shadow-lg hover:-translate-y-1 cursor-pointer duration-300 border-2 border-rose-500 flex-shrink-0 py-1 px-2 inline-block">2025</li>
                            <li className="hover:shadow-lg hover:-translate-y-1 cursor-pointer duration-300 border-2 border-rose-500 flex-shrink-0 py-1 px-2 inline-block">2024</li>
                            <li className="hover:shadow-lg hover:-translate-y-1 cursor-pointer duration-300 border-2 border-rose-500 flex-shrink-0 py-1 px-2 inline-block">2023</li>
                            <li className="hover:shadow-lg hover:-translate-y-1 cursor-pointer duration-300 border-2 border-rose-500 flex-shrink-0 py-1 px-2 inline-block">2022</li>
                        </ul>
                    </article>

                    <article className="mb-5">
                        <h2 className=" text-xl tracking-wider mb-2">Kategori</h2>

                        <ul className="flex flex-wrap gap-2">
                            <li className="hover:shadow-lg hover:-translate-y-1 cursor-pointer duration-300 border-2 border-rose-500 flex-shrink-0 py-1 px-2 inline-block">Trivia</li>
                            <li className="hover:shadow-lg hover:-translate-y-1 cursor-pointer duration-300 border-2 border-rose-500 flex-shrink-0 py-1 px-2 inline-block">Kesehatan</li>
                            <li className="hover:shadow-lg hover:-translate-y-1 cursor-pointer duration-300 border-2 border-rose-500 flex-shrink-0 py-1 px-2 inline-block">Sejarah</li>
                        </ul>
                    </article>
                </div>
            </div>
        </section>
    )
}

function Article({title, date, excerpt, slug}){
    return(
        <div className="py-5 border-b-2 border-rose-500 mb-5">
            <article>
                <h2 className="text-2xl tracking-wider mb-2">
                    {title
                        .split(" ")
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
                </h2>
                <p className="mb-5 tracking-wider leading-relaxed">
                    {excerpt}
                </p>
                <span className="tracking-wider text-sm text-gray-700">{date}</span>
            </article>
        </div>
    )
}

export { ArticleWrapper, Article}