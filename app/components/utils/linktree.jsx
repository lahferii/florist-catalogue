function LinkWrapper({ children }){
    return(
        <div className="max-w-2xl px-10 mx-auto">
            <article className="mb-10">
                <div className="w-24 md:w-28 h-24 md:h-28 mb-2 rounded-full bg-rose-500 mx-auto"></div>
                
                <div className="text-center">
                    <h1 className="text-xl tracking-wide mb-1">Lorem Florist</h1>
                    <p className="tracking-wide text-sm md:w-2/3 mx-auto">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, perferendis.
                    </p>
                </div>
            </article>
            
            <section className="flex flex-col gap-8 py-10">
                { children }
            </section>
        </div>
    )
}

function LinkItem({title, path}){
    return(
        <div className="p-3 md:p-5 relative rounded-md bg-white flex items-center border-2 border-rose-500 shadow hover:shadow-lg hover:-translate-y-1 duration-300">
            <div className="absolute -top-3 -right-3 w-8 h-8">   
                <div className="relative">
                    <div className="absolute w-full h-8 rounded-full animate-ping border-2 border-rose-500"></div>
                    <div className="absolute w-full h-8 rounded-full bg-rose-500"></div>
                </div>
            </div>
            
            <div className="text-center w-full">
                <h2 className="tracking-wider font-semibold">
                    {title}
                </h2>
            </div>
        </div>
    )
}

export {LinkWrapper, LinkItem}