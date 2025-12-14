import Link from "next/link"

function FooterListWrapper({title, caption, children}){
    return(
        <div className={"mb-2 md:w-72"}>
            <h3 className="text-xl tracking-wide mb-2">{title}</h3>
            <p>
                {caption}
            </p>
            <ul>
                {children}
            </ul>
        </div>
    )
}

function FooterList({list}){
    return(
        <li>
            <Link href="/">{list}</Link>
        </li>
    )
}

export {FooterListWrapper, FooterList}