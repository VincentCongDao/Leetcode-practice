import { Avatar } from "@mui/material";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    const [userPortal, setUserPortal] = useState<string | null | boolean>(null);
    useEffect(() => {
        const auth = getAuth()
        const userExist = onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid
                setUserPortal(uid)
            }
            else {
                setUserPortal(false)
            }
        })
        return userExist;
    }, []);
    return (
        <>
            <div>
                <nav className="wrapper">
                    <div className="nav-logo">
                        <Link to="/">
                            <img src="" alt="brand logo" />
                        </Link>
                    </div>
                    <div className="nav-links">
                        <ul className="nav-link-body">
                            <li className="nav-link"><Link to="/expensetracker">Expense</Link></li>
                            <li className="nav-link"><Link to="/todolist">To Do List</Link></li>
                            {userPortal ? (
                                <li className="nav-link"><Avatar alt="user" src="https://example.com/user-avatar.jpg" /></li>
                            ) : (
                                <li className="nav-link"><Link to="/signup">Sign Up</Link></li>
                            )} </ul>
                    </div>
                </nav>
            </div>
        </>);
}

export default Navbar;