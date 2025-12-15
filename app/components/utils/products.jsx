export {ProductWrapper, ProductBox}

function ProductWrapper({title, children}){
    return(
        <section className="mb-10">
            <div className="mb-2 flex justify-between">
                <div>
                    <h2 className="text-2xl tracking-wider">{title}</h2>
                </div>

                <div>
                    <button className="btn-primary">Selengkapnya</button>
                </div>
            </div>

        <div className="w-full flex space-x-5 overflow-x-auto py-5 snap-x snap-mandatory">
            {children}
        </div>
        </section>
    )
}

function ProductBox({path, title, price}){
    return(
        <div className="w-80 h-96 flex-shrink-0 flex flex-col rounded overflow-hidden snap-center">
            <article className="flex-[2] bg-black">

            </article>

            <article className="flex-1 relative flex flex-col px-2 bg-white">
                <div className="absolute bottom-5">
                    <h3 className="tracking-widest font-semibold">{title}</h3>
                    <p className="mb-5 text-sm text-gray-700">Rp. {price}</p>
                    <button className="btn-primary py-1 rounded-sm">Pesan</button>
                </div>
            </article>
        </div>
    )
}