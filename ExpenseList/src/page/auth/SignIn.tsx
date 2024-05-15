import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../auth/firebase";
import { useToast } from "../../components/ui/use-toast";
const SignIn = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const { toast } = useToast()
    const onLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            const user = userCredential.user;
            if (user) {
                toast({
                    title: "You have already been login in"
                })
            }
            console.log(user)
            navigate("/")
        }
        catch (error) {
            const errorMessage = (error as Error).message
            console.log(errorMessage)

        }
    }
    return (
        <>
            <form className="" onSubmit={onLogin}>
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
                                <NavLink to="/signout">
                                    Sign Up
                                </NavLink>
                            </p>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default SignIn;