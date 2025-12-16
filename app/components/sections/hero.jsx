import Image from 'next/image';
import myIcon from '@/public/assets/hero.png';
import Link from 'next/link';

export default function Hero(){
    return(
        <section className="mb-20 w-full min-h-screen px-5 pt-32 bg-gradient-to-b from-rose-100 via-rose-50 to-white flex flex-col space-y-5">
            <article className="md:w-3/4 mx-auto flex flex-col">
                <div className="text-center mb-5">
                    <h1 className="text-3xl md:text-4xl tracking-wider mb-2 font-serif">
                        Lorem Ipsum Dolorsit
                    </h1>
                    <div className="md:w-3/4 mx-auto">
                        <p className="text-sm md:text-md tracking-wider">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad accusamus deleniti
                        </p>
                    </div>
                </div>

                <ul className="flex space-x-5 items-center justify-center">
                    <Link href="/kontak" className="btn-primary md:py-2">Hubungi Kami</Link>
                    <Link href="/katalog" className="btn-secondary md:py-2">Katalog</Link>
                </ul>
            </article>

            <article>
                <Image className='w-[700px] md:w-96 mx-auto' src={myIcon} alt="Hero Image"/>
            </article>

        </section>
    );
}