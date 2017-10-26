import React from 'react'

export default () => (
  <div>
    <div className="col-md-12">
      <form>
        <div className="form-group form-group-outline">
          <label for="exampleInputName">Username</label>
          <input type="text" className="form-control" id="exampleInputName" placeholder="Name" />
          <p className="help-block help-block-success">Username available!</p>
        </div>
        <div className="form-group form-group-outline">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
          <p className="help-block help-block-warning">Please fill in your email address</p>
        </div>
        <div className="form-group form-group-outline">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            <p className="help-block help-block-danger">Wrong password!</p>
        </div>
         
          <div className="checkbox checkbox-primary"><input type="checkbox" id="checkbox2" />
            <label for="checkbox2">Remember me</label>
          </div>
            <button type="submit" className="btn btn-primary margin-top-10">Register</button>
      </form>
    </div>
  </div>
)