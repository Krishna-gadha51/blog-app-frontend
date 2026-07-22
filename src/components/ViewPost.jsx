import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewPost = () => {

  const [data, setData] = useState([])
  const [token,setToken]=useState(sessionStorage.getItem("token"))
  const [userId,setuserId]=useState(
    {"userId":sessionStorage.getItem("userId")}
    )

  const fetchData=()=>{
    console.log(token)
    axios.post("http://localhost:3030/viewmypost",userId,{
        headers: {"token": token,
          "Content-Type": "application/json",
        }

    }) .then(
        (response)=>{
            console.log(response.data)
            setData(response.data)
        }
    ).catch(
        (error)=>{console.log(error)}
    )
}



  useEffect(()=>{fetchData()},[])

  return (
    <div>

      <div className="container">
        <NavBar/>
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row">
            
            {data.map(
              (value,index)=>{
                return   <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                <div class="card mb-3" >
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img src="..." class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                      <div className="card-body">
                      <h5 className="card-title">{value.Message}</h5>
                       <p className="card-text"><small className="text-body-secondary">Posted on {value.postedDate}</small></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              }
            )}

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ViewPost