import React, { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import './Signup.css'



function Login() {
    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        // try{

        //     await axios.post("http://localhost:8000/signup",{
        //         email,password
        //     })
        //     .then(res=>{
        //         if(res.data=="exist"){
        //             alert("User already signed up")
        //         }
        //         else if(res.data=="not exist"){
        //             history({state:{id:email}})
        //         }
        //     })
        //     .catch(e=>{
        //         alert("Invalid details")
        //         console.log(e);
        //     })

        // }
        // catch(e){
        //     console.log(e);

        // }

        try {
            await axios.post("http://localhost:8000/signup", {
                email, password
            })
            .then(res => {
                console.log("Response data:", res.data);
                alert("Sign up successfull");
                if (res.data === "exist") {
                    alert("User already signed up");
                } else if (res.data === "not exist") {
                    history({ state: { id: email } });
                }
            })
            .catch(e => {
                alert("Invalid details");
                console.log("Error:", e);
            });
        } catch (error) {
            console.log("Caught an error:", error);
        }
        



    }


    return (
        <div className="login">

            <h1 id="head">Signup</h1>

            <form action="POST">
                <input  type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter your email"  /> <br /> <br />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Enter your password" /> <br />  <br />
                <button id="but" type="submit" onClick={submit}><span className="span1">Sign up</span></button>

            </form>


          
            <p>or</p>
            

            <Link style={{textDecoration:'none'}} to="/">back to login Page</Link>

        </div>
    )
}

export default Login