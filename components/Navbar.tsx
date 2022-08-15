import Link from "../node_modules/next/link"

const Navbar = () => {
    const user = null;
    const username = null;

    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link href="/">
                        <button>FEED</button>
                    </Link>
                </li>
    
            {username ? (
                <>
                    <li>
                        <Link href="/admin">
                            <button>Write Posts</button>
                        </Link>
                    </li>
                    <li>
                        <Link href={`/${username}`}>
                            <img src={user?.photoURL}/>
                        </Link>
                    </li>
                </>
            ) : (
                <li>
                    <Link href="/enter">
                        <button>Log in</button>
                    </Link>
                </li>
            )}
            </ul>
        </nav>
    )
}

export default Navbar;