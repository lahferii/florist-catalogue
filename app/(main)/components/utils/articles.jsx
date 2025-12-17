import Link from "next/link";

function ArticleWrapper({ children }) {
  return (
    <section className="w-full flex flex-col lg:flex-row gap-10">
      {/* Main Artikel */}
      <div className="lg:w-3/4 xl:max-w-3xl">{children}</div>

      {/* Sidebar */}
      <div className="flex-1">
        <div className="lg:sticky lg:top-24">
          {/* Artikel Terbaru */}
          <article className="mb-10">
            <h2 className="text-xl tracking-wider mb-2">Artikel Terbaru</h2>
            <ul>
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

          {/* Kategori */}
          <article className="mb-5">
            <h2 className="text-xl tracking-wider mb-2">Kategori</h2>
            <ul>
              <li className="hover:text-rose-500 cursor-pointer duration-300 mb-2">Trivia</li>
              <li className="hover:text-rose-500 cursor-pointer duration-300 mb-2">Kesehatan</li>
              <li className="hover:text-rose-500 cursor-pointer duration-300 mb-2">Sejarah</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

function Article({ title, excerpt, date, slug }) {
  return (
    <Link href={`/artikel/${slug}`} className="group cursor-pointer">
      <div className="mb-10 flex justify-between">
        <article className="md:w-2/3 pr-5">
          <h2 className="md:text-2xl tracking-wider mb-2 group-hover:text-rose-500 duration-300">
            {title
              .split(" ")
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </h2>
          <p className="hidden md:block tracking-wide leading-relaxed mb-5">
            {excerpt.split(" ").slice(0, 10).join(" ")}...
          </p>
          <span className="tracking-wider text-sm text-gray-700">{date}</span>
        </article>

        <div className="w-24 h-24 md:w-44 md:h-44 bg-black flex-shrink-0"></div>
      </div>
    </Link>
  );
}

export { ArticleWrapper, Article };