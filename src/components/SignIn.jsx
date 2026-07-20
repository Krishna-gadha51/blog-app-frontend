import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {

    const navigate = useNavigate()


const [input, setInput] = useState(
        {

           "email":"", 
            "password":""
})


const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }


const readValue = () => {
    console.log(input)

    axios.post("http://localhost:3030/signIn", input).then(
        (response) => {
            console.log(response.data)
if (response.data.status === "password is incorrect") {
                alert("password is incorrect")
}
else if (response.data.status === "email id not found") {
                alert("email id not found")
            
        }else
        {
            let token = response.data.token
            let userId = response.data.userId

            console.log(token)
            console.log(userId)

            sessionStorage.setItem("token", token)
            sessionStorage.setItem("userId", userId)

            navigate("/create")
        }}
    ).catch(
        (error) => {
            console.log(error)
        }
    )
}



  return (
    <div>

        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="text" className="form-control" name="email" value={input.email} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" name="password" value={input.password} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
                            <button type="button" className="btn btn-success mt-3" onClick={readValue}>SignIn</button>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
                            <a href="/" className="btn btn-secondary" >New users click here</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignIn