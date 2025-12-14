export default function BoxFeatures({boxTitle, boxDetail}){
    return(
        <div className="sm:w-1/2 lg:w-1/3 h-60 p-2">
            <div className="w-full h-full bg-gradient-to-br from-rose-500 via-rose-300 to-rose-200 rounded p-5 flex">
                <article className="m-auto text-center">
                    <h3 className="text-2xl font-semibold mb-2 tracking-wider">{ boxTitle }</h3>
                    <p className="tracking-wider">{boxDetail}</p>
                </article>
            </div>
        </div>
    )
}