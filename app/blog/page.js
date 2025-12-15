import { ArticleWrapper, Article } from "./components/articles"

const articles = [
  {
    id: 1,
    title: "cara membuat ketupat lembu",
    excerpt: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel dolor facilis suscipit ipsum reprehenderit odit ducimus sint",
    date: "15 Desember 2025"
  },
  { 
    id: 2, 
    title: "cara membuat ayam goreng crispy meskipun tidak punya ayam dan kompor", 
    excerpt: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam sit cum necessitatibus. Alias eius similique omnis ex sunt, quibusdam molestias porro, animi sapiente inventore, odio magnam repudiandae aperiam. Ratione odit eveniet, fuga, voluptatum placeat, magnam suscipit reiciendis dolorem ipsum cumque similique perspiciatis dolores obcaecati commodi et laboriosam sit officiis inventore? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam sit cum necessitatibus. Alias eius similique omnis ex sunt, quibusdam molestias porro, animi sapiente inventore, odio magnam repudiandae aperiam. Ratione odit eveniet, fuga, voluptatum placeat, magnam suscipit reiciendis dolorem ipsum cumque similique perspiciatis dolores obcaecati commodi et laboriosam sit officiis inventore?", 
    date: "14 Desember 2025" 
  },
  { 
    id: 3, 
    title: "mencari makna hidup melalui permainan online mobile legends bang-bang", 
    excerpt: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam sit cum necessitatibus. Alias eius similique omnis ex sunt, quibusdam molestias.", 
    date: "13 Desember 2025" 
  },
  { 
    id: 4, 
    title: "cara berdamai dengan alam semester", 
    excerpt: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam sit cum necessitatibus. Alias eius similique omnis ex sunt, quibusdam molestias porro, animi sapiente inventore, odio magnam repudiandae aperiam. Ratione odit eveniet, fuga, voluptatum placeat, magnam suscipit reiciendis dolorem ipsum cumque similique perspiciatis dolores obcaecati commodi et laboriosam sit officiis inventore?", 
    date: "12 Desember 2025" 
  },
  { 
    id: 5, 
    title: "duh, kasih judul apa lagi ya? bingung sih, jarang banget bikin yang kaya gini", 
    excerpt: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam sit cum necessitatibus. Alias eius similique omnis ex sunt, quibusdam molestias porro, animi sapiente inventore, odio magnam repudiandae aperiam. Ratione odit eveniet, fuga, voluptatum placeat, magnam suscipit reiciendis dolorem ipsum cumque similique perspiciatis dolores obcaecati commodi et laboriosam sit officiis inventore?", 
    date: "11 Desember 2025" 
  },
  { 
    id: 6, 
    title: "duh, kasih judul apa lagi ya? bingung", 
    excerpt: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam sit cum necessitatibus. Alias eius similique omnis ex sunt, quibusdam molestias porro, animi sapiente inventore, odio magnam repudiandae aperiam. Ratione odit eveniet, fuga, voluptatum placeat, magnam suscipit reiciendis dolorem ipsum cumque similique perspiciatis dolores obcaecati commodi et laboriosam sit officiis inventore?", 
    date: "10 Desember 2025" 
  },
]

export default function Artikel() {
  return (
    <section className="pt-24 px-5 md:px-16 mb-10 relative">
      <article className="mb-5">
        <h2 className=" text-2xl tracking-wider">Blog</h2>
      </article>

      <ArticleWrapper>
        {articles.map((art) => (
          <Article key={art.id} date={art.date} excerpt={art.excerpt} title={art.title} />
        ))}
      </ArticleWrapper>
    </section>
  )
}
