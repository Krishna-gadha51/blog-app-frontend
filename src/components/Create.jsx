import axios from "axios";
import React, { useState } from "react";
import NavBar from "./NavBar";

const Create = () => {
  const token = sessionStorage.getItem("token");
  const userId = sessionStorage.getItem("userId");

  const [input, setInput] = useState({
    Message: "",
    userId: userId,
  });

  const inputHandler = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const readValue = () => {
    console.log(input);
    console.log(token);

    axios
      .post("http://localhost:3030/create", input, {
        headers: {
          token: token,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data)

        if (response.data.status === "success") {
          alert("Posted Successfully")

         
        } else {
          alert(response.data.message || "Something went wrong")
        }
      })
      .catch((error) => {
        console.log(error)

        if (error.response) {
          console.log(error.response.data);
          alert(error.response.data.message || "Server Error")
        } else {
          alert("Unable to connect to the server")
        }
      });
  };

  return (
    
    <div className="container mt-4">
      <NavBar/>
      <div className="row justify-content-center">
        <div className="col-md-6">

          <div className="card shadow">
            <div className="card-body">

              <h3 className="text-center mb-3">Create Post</h3>

              <div className="mb-3">
                <label className="form-label">Post a Message</label>

                <textarea
                  className="form-control"
                  rows="5"
                  name="Message"
                  value={input.Message}
                  onChange={inputHandler}
                  placeholder="Write something..."
                ></textarea>
              </div>

              <button
                className="btn btn-success w-100"
                onClick={readValue}
              >
                Post
              </button>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Create;