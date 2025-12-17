import Link from "next/link";
import Image from "next/image"
import imagePath from '@/public/assets/contactBanner.jpg';

export default function Contact(){
    return(
        <section className="mb-20 relative w-full min-h-80 rounded-lg overflow-hidden">
            <Image
                src={imagePath}
                alt="contact banner"
                className="object-bottom object-cover brightness-50 -z-10"
                fill
            />
            
            <div className="w-full h-full py-20 absolute flex">
                <div className="m-auto">
                    <article className="mb-5 px-5 sm:px-0 text-center text-white">
                        <h2 className="text-2xl sm:text-3xl tracking-wider">Ingin Mengenal Kami Lebih Dekat?</h2>
                    </article>

                    <article className="flex flex-col sm:flex-row gap-5 justify-center">
                        <button className="btn-primary hover:-translate-y-1 sm:py-2 w-56 mx-auto">
                            <Link href="/kontak">
                                Hubungi Kami
                            </Link>
                        </button>
                        <button className="btn-secondary hover:-translate-y-1 sm:py-2 w-56 mx-auto">
                            <Link href="/">
                                Lihat Kami Di Shopee
                            </Link>
                        </button>
                    </article>
                </div>
            </div>
        </section>
    )
}