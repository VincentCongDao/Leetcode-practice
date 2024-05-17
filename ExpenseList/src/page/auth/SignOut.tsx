import { Avatar } from "@mui/material";
import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";


const SignOut: React.FC = () => {
    const navigate = useNavigate()
    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            console.log("User are sign out")
            navigate("/")
        })
            .catch(err => {
                console.log("Sign out issue: ", err)
            })
    }
    return (
        <li className="nav-link">
            <Avatar
                alt="user"
                src="https://example.com/user-avatar.jpg"
                onClick={handleSignOut}
                style={{ cursor: "pointer" }}
            />
        </li>
    )
}

export default SignOut