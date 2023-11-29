import { NavLink } from "react-router-dom";


function Header(){
  return<>
<nav className="navbar navbar-expand-lg bg-body-tertiary  bg-dark border-bottom border-body" data-bs-theme="dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand text-warning" to="/">NikeBrand</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/services">Services</NavLink>
          </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </li>
      </ul>
      <div className="max-2"> 
        <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#signupModal">Sign Up</button>
      </div>
    </div> 
  </div> 
    </nav> 

<div className="modal fade" id="signupModal" tabindex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Get an Nike store account</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1"/>
          </div>
          <div className="mb-3">
            <label for="cexampleInputPassword1" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="cexampleInputPassword1"/>
          </div>
          <button type="submit" className="btn btn-primary">Create Account</button>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
         <button type="button" className="btn btn-primary">Save changes</button> 
      </div>
    </div>
  </div>
</div>


  </>
}

export default Header;