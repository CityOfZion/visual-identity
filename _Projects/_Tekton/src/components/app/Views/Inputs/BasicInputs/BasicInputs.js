import React from 'react'

export default () => (
  <div>
    <div className="col-md-12">
      <form>
        <div className="form-group">
          <label for="exampleInputName">Username</label>
          <input type="text" className="form-control" id="exampleInputName" placeholder="Name" />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            <p className="help-block">Example block-level help text here.</p>
        </div>
         
          <div className="checkbox"><input type="checkbox" id="checkbox1" />
            <label for="checkbox1">Remember me</label>
          </div>
            <button type="submit" className="btn btn-primary margin-top-10">Register</button>
      </form>
    </div>
  </div>
)