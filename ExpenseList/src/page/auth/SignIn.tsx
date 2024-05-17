import { Snackbar } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../auth/firebase";
import ElementContainer from "../../components/ElementContainer";
const SignIn = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [open, setOpen] = useState(false);

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const onLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            const user = userCredential.user;
            if (user) {
                <Snackbar open={open} message="You are sign in" autoHideDuration={1000} onClose={handleClose} />
            }
            console.log(user)
            navigate("/")
        }
        catch (error) {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            const user = userCredential.user;
            if (!user) {
                <Snackbar open={open} message="Wrong password or email" autoHideDuration={2000} onClose={handleClose} />
            }
            const errorMessage = (error as Error).message
            console.log(errorMessage)

        }
    }
    return (
        <ElementContainer>
            <form className="form-sign sign-in-form" onSubmit={onLogin}>
                <div>
                    <div>
                        <div>
                            <label htmlFor="email-address">Email Address</label>
                            <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                                required placeholder="Email address" />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" value={password} onChange={e => setPassword(e.target.value)}
                                required placeholder="Create your password" />
                        </div>
                        <button type="submit">Sign In</button>

                        <div>
                            <p>
                                Already have an account? {" "}

                                <NavLink to="/resetpassword">
                                    Reset Your Password
                                </NavLink>
                                <NavLink to="/signup">
                                    Sign Up
                                </NavLink>
                            </p>
                        </div>
                    </div>
                </div>
            </form>
        </ElementContainer>
    );
}

export default SignIn;