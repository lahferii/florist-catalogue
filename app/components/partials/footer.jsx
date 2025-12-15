import { FooterListWrapper, FooterList } from "../utils/footerList"

export default function Footer(){
    return(
        <footer className="w-full pb-20 bg-gradient-to-b from-white  to-rose-100 px-5 md:px-16">
            <article className="flex flex-col text-center md:text-left md:flex-row md:justify-between gap-x-10 mb-10">
                <FooterListWrapper title="Tautan">
                    <FooterList list="Beranda"/>
                    <FooterList list="Profil"/>
                    <FooterList list="Kontak"/>
                    <FooterList list="Shopee"/>
                </FooterListWrapper>

                <FooterListWrapper title="Sosial Media">
                    <FooterList list="Instagram"/>
                    <FooterList list="Whatsapp"/>
                    <FooterList list="Tiktok"/>
                </FooterListWrapper>

                <FooterListWrapper title="Produk Kami">
                    <FooterList list="Buket Uang"/>
                    <FooterList list="Fresh Flower"/>
                    <FooterList list="ABCDEFG"/>
                    <FooterList list="ABCDEFG"/>
                </FooterListWrapper>
                
                <FooterListWrapper title="Alamat">
                    <FooterList list="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa distinctio soluta pariatur unde esse obcaecati. Labore rem soluta consequuntur"/>
                </FooterListWrapper>
            </article>

            <article className="w-full">
                <h2 className="text-3xl tracking-wider mb-5 text-center md:text-left">Temukan Kami!</h2>

                <div className="w-full h-96">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.6922250950124!2d112.7911825737167!3d-7.275818971496008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fa10ea2ae883%3A0xbe22c55d60ef09c7!2sPoliteknik%20Elektronika%20Negeri%20Surabaya!5e0!3m2!1sid!2sid!4v1765714379615!5m2!1sid!2sid"
                        className="w-full h-full border-none" 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </article>
        </footer>
    )
}