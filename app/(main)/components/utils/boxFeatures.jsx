import { forwardRef } from "react"

const BoxFeatures = forwardRef(({boxTitle, boxDetail}, ref) => {
    return(
        <div ref={ref} className="md:w-1/2 lg:w-1/4 h-60 p-2">
            <div className="hover:-translate-y-2 hover:cursor-pointer duration-300 w-full h-full bg-gradient-to-br from-rose-300 via-rose-400 to-rose-600 rounded p-5 flex shadow-xl">
                <article className="m-auto text-center">
                    <div className="w-20 h-20 bg-white rounded-full mx-auto mb-5"></div>
                    <h3 className="text-xl font-semibold mb-1 tracking-wider text-white">{ boxTitle }</h3>
                    <p className="tracking-widest text-white">{boxDetail}</p>
                </article>
            </div>
        </div>
    )  
})

export default BoxFeatures