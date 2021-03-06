import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import blog from "../../assets/blok.png";
import { createUser } from '../../helper/Firebase';
import "./Register.css";


function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    // e.preventDefault();
    createUser(email, password, navigate);
    console.log(email, password);
  }

  return (
    <section>
      <div className="container py-5 h-50">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 ">
            <div
              className="card shadow-2-strong"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-5 text-center">
                <img className="mb-5" src={blog} alt="image" />

                <div className="form-outline mb-2">
                  <input
                    type="email"
                    id="typeEmailX-2"
                    className="form-control form-control-lg"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label className="form-label" htmlFor="typeEmailX-2">
                    Email
                  </label>
                </div>

                <div className="form-outline mb-2">
                  <input
                    type="password"
                    id="typePasswordX-2"
                    className="form-control form-control-lg"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label className="form-label" htmlFor="typePasswordX-2">
                    Password
                  </label>
                </div>

                <button
                  className="btn btn-primary btn-lg btn-block"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Register
                </button>

                <hr className="my-4" />

                <button
                  className="btn btn-lg btn-block btn-primary"
                  style={{ backgroundColor: "#dd4b39" }}
                  type="submit"
                  
                >
                  <i className="fab fa-google me-2"></i> Register with google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <section className="vh-50" >
    //   <div className="container py-5 h-80">
    //     <div className="row d-flex justify-content-center align-items-center h-100">
    //       <div className="col-12 col-md-8 col-lg-6 col-xl-5">
    //         <div
    //           className="card shadow-2-strong"
    //           style={{ borderRadius: "1rem" }}
    //         >
    //           <div className="card-body p-5 text-center">
    //             <img className="mb-5" src={blog} alt="image"/>

    //             <div className="form-outline mb-2">
    //               <input
    //                 type="email"
    //                 id="typeEmailX-2"
    //                 className="form-control form-control-lg"
    //                 onChange={(e) => setEmail(e.target.value)}
    //               />
    //               <label className="form-label" htmlFor="typeEmailX-2">
    //                 Email
    //               </label>
    //             </div>

    //             <div className="form-outline mb-2">
    //               <input
    //                 type="password"
    //                 id="typePasswordX-2"
    //                 className="form-control form-control-lg"
    //                 onChange={(e) => setPassword(e.target.value)}
    //               />
    //               <label className="form-label" htmlFor="typePasswordX-2">
    //                 Password
    //               </label>
    //             </div>

                
    //             <button
    //               className="btn btn-primary btn-lg btn-block"
    //               type="submit"
    //               onClick={handleSubmit}
    //             >
    //               Register
    //             </button>

    //             <hr className="my-4" />

    //             <button
    //               className="btn btn-lg btn-block btn-primary"
    //               style={{ backgroundColor: "#dd4b39" }}
    //               type="submit"
    //             >
    //               <i className="fab fa-google me-2"></i> Sign in with google
    //             </button>
                
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  )
}

export default Register