import React, {useState, useRef} from 'react'
import "./register.scss";

const Register = () => {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleRegister = () => {
        setEmail(emailRef.current.value);
    }

    const handleSubmit = () =>{
        setPassword(passwordRef.current.value);
    }
  return (
    <div className="register">
        <div className="top">
            <div className="wrapper">
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="logo" />
        <button className="loginBtn">
            Sign In
        </button>
        </div>
        </div>
        <div className="container">
            <h1>Unlimited movies, Tv Shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <p>
                Ready to watch? Enter your email to create or restart your membership.
            </p> {
                !email ? (
                <div className="input">
                    <input type="email" placeholder="Email address" ref={emailRef} />
                    <button className="registerBtn" onClick={handleRegister}>Get Started</button>
            </div>
                ) : (
                <form className="input">
                    <input type="password" placeholder="Password" ref={passwordRef} />
                    <button className="registerBtn" onClick={handleSubmit}>Start Membership</button>
            </form>
                )
            }
            
        </div>
    </div>
  )
}

export default Register;