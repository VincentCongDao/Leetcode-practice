import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../auth/firebase";
const SignUp = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const user = userCredential.user;
            console.log(user)
            navigate("/SignIn")
        }
        catch (error) {
            const errorMessage = (error as Error).message
            console.log(errorMessage)

        }
    }
    return (
        <>
            <form className="" onSubmit={onSubmit}>
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
                        <button type="submit">Sign Up</button>

                        <div>
                            <p>
                                Already have an account? {" "}
                                <NavLink to="/SignIn">
                                    Sign In
                                </NavLink>
                            </p>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default SignUp;