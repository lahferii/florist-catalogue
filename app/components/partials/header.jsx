export default function Header(){
    return(
        <header className="w-full h-20 fixed">
            <div className="max-w-7xl h-full px-5 mx-auto flex justify-between items-center">
                <div>
                    <span className="text-lg md:text-xl tracking-wider">Lorem Florist</span>
                </div>
                <div>
                    <ul className="flex space-x-5 items-center">
                        <li className="tracking-wider">
                            Catalogue
                        </li>
                        <li>
                            <button className="btn-primary">
                                Contact
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}