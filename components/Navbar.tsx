import Link from "../node_modules/next/link"
import { useContext } from "react";
import { UserContext } from "../lib/context";

const Navbar = () => {
    const { user, username } = useContext(UserContext);
    
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