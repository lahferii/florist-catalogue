import Link from "next/link"

function FooterListWrapper({title, children}){
    return(
        <div className={"mb-5"}>
            <h3 className="text-xl tracking-wide mb-1">{title}</h3>
            <ul>
                {children}
            </ul>
        </div>
    )
}

function FooterList({list}){
    return(
        <li className="md:max-w-56">
            <Link href="/">{list}</Link>
        </li>
    )
}

export {FooterListWrapper, FooterList}