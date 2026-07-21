import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'

const ViewAll = () => {
    const [token,setToken]=useState(sessionStorage.getItem("token"))

    const [data, setData] = useState([])


const fetchData=()=>{
    console.log(token)
    axios.post("http://localhost:3030/viewall",{},{
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
<NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row">
                            {data.map((value,index)=>{
                                    return <div className="col col-12 col col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">

                                <div className="card mb-3" >
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm01QTL2mpgNAvnNDz6Dq9maFR42_3YKMNQIMR2NPnwg&s=10" className="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-md-8">
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

export default ViewAll