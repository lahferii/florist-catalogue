function Wrapper({children}){ 
  return( 
    <section className="flex gap-5 flex-wrap mb-20">
      {children}
    </section> 
  )
}

function Product({path, title, price}){
    return(
        <div className="w-full md:w-72 h-96 flex-shrink-0 flex flex-col rounded overflow-hidden shadow-md relative">
            <article className="w-full h-full">

            </article>
            
            <article className="absolute w-full h-full flex flex-col px-5 bg-gradient-to-b from-transparent via-transparent to-pink-100">
                <div className="absolute bottom-5">
                    <h3 className="tracking-widest font-semibold">{title}</h3>
                    <p className="mb-5 text-sm text-gray-700">Rp. {price}</p>
                    <button className="btn-primary py-1 rounded-sm" onClick={() => WhatsappRedirect(title, price)}>
                      Pesan
                    </button>
                </div>
            </article>
        </div>
    )
}

function WhatsappRedirect(title, price){
  const phone = "6283167944561";
  const message = `Halo! saya mau pesan ${title} dengan harga ${price}.`;

  const encodedMessage = encodeURIComponent(message);

  window.open(
    `https://wa.me/${phone}?text=${encodedMessage}`,
    "_blank"
  );
}

export {Wrapper, Product}