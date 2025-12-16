"use client";
import { use } from "react";
import Link from "next/link";

const articles = [
    {
        id: 1,
        title: "cara membuat ketupat lembu",
        excerpt: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel dolor facilis suscipit ipsum reprehenderit odit ducimus sint",
        date: "15 Desember 2025",
        slug: "cara-membuat-ketupat-lembu"
    },
    {
        id: 2,
        title: "cara membuat ayam goreng crispy meskipun tidak punya ayam dan kompor",
        excerpt: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam sit cum necessitatibus. Alias eius similique omnis ex sunt, quibusdam molestias porro, animi sapiente inventore, odio magnam repudiandae aperiam. Ratione odit eveniet, fuga, voluptatum placeat, magnam suscipit reiciendis dolorem ipsum cumque similique perspiciatis dolores obcaecati commodi et laboriosam sit officiis inventore? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam sit cum necessitatibus. Alias eius similique omnis ex sunt, quibusdam molestias porro, animi sapiente inventore, odio magnam repudiandae aperiam. Ratione odit eveniet, fuga, voluptatum placeat, magnam suscipit reiciendis dolorem ipsum cumque similique perspiciatis dolores obcaecati commodi et laboriosam sit officiis inventore?",
        date: "14 Desember 2025",
        slug: "cara-membuat-ayam-goreng-crispy-meskipun-tidak-punya-ayam-dan-kompor"
    },
    {
        id: 3,
        title: "mencari makna hidup melalui permainan online mobile legends bang-bang",
        excerpt: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam sit cum necessitatibus. Alias eius similique omnis ex sunt, quibusdam molestias.",
        date: "13 Desember 2025",
        slug: "mencari-makna-hidup-melalui-permainan-online-mobile-legends-bang-bang"
    },
    {
        id: 4,
        title: "cara berdamai dengan alam semester",
        excerpt: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam sit cum necessitatibus. Alias eius similique omnis ex sunt, quibusdam molestias porro, animi sapiente inventore, odio magnam repudiandae aperiam. Ratione odit eveniet, fuga, voluptatum placeat, magnam suscipit reiciendis dolorem ipsum cumque similique perspiciatis dolores obcaecati commodi et laboriosam sit officiis inventore?",
        date: "12 Desember 2025",
        slug: "cara-berdamai-dengan-alam-semester"
    },
    {
        id: 5,
        title: "duh, kasih judul apa lagi ya? bingung sih, jarang banget bikin yang kaya gini",
        excerpt: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam sit cum necessitatibus. Alias eius similique omnis ex sunt, quibusdam molestias porro, animi sapiente inventore, odio magnam repudiandae aperiam. Ratione odit eveniet, fuga, voluptatum placeat, magnam suscipit reiciendis dolorem ipsum cumque similique perspiciatis dolores obcaecati commodi et laboriosam sit officiis inventore?",
        date: "11 Desember 2025",
        slug: "duh-kasih-judul-apa-lagi-ya-bingung-sih-jarang-banget-bikin-yang-kaya-gini"
    }
]

export default function SingleArticle({ params }) {
    const { slug } = use(params);
    const article = articles.find((a) => a.slug === slug);

    if (!article) return <p>Artikel tidak ditemukan</p>;

    return (
        <section className="pt-24 px-5 md:px-16 mb-10">
            <div className="mb-10">
                <div className="flex justify-between">
                    <p className="text-sm text-gray-500 tracking-wider">
                        <Link href="/">Acas Florist </Link>
                        / 
                        <Link href="/artikel"> Artikel /</Link>
                    </p>
                    {/* <p className="text-sm text-gray-500">{article.date}</p> */}
                </div>

                <h1 className="text-3xl font-bold">{article.title}</h1>
            </div>


            <p>{article.excerpt}</p>
        </section>
    );
}
