import React, { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import './Login.css'






function Login() {

    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    history("/home",{state:{id:email}})
                }
                else if(res.data=="notexist"){
                    alert("User have not sign up")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }



    return (
        <div className="login">
            <div className="row">
                <div className="col-4">
                    <h1>Quiz App</h1>
                </div>
                <div className="col-8">
                    <h1 id="head">Login</h1>

                    
                        <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter your email" /> <br /> <br />
                        <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder=" Enter your Password" /> <br /> <br />
                        <button id="but" type="submit" onClick={submit}><span className="span1">Log in</span></button>

                    
                </div>
            </div>



            <br />
            <p>or</p>


            <Link style={{ textDecoration: 'none', textAlign: 'center' }} to="/signup">Click here to Signup</Link>

        </div>
    )
}

export default Login