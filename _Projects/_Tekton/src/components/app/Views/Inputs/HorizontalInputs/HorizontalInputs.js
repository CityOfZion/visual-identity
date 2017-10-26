import React from 'react'

export default () => (
    <div>
      <div className="col-md-12">
        <form className="form-horizontal">
          <div className="form-group">
            <label for="inputEmail3" className="col-sm-2 control-label">Email</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
            </div>
          </div>
          <div className="form-group">
            <label for="inputPassword3" className="col-sm-2 control-label">Password</label>
            <div className="col-sm-10">
              <input type="password" className="form-control" id="inputPassword3" placeholder="Password"/>
            </div>
          </div>
        </form>
      </div>
      <div className="col-md-12">
        <form className="form-horizontal">
          <div className="form-group form-group-outline">
            <label for="inputEmail3" className="col-sm-2 control-label">Email</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
            </div>
          </div>
          <div className="form-group form-group-outline">
            <label for="inputPassword3" className="col-sm-2 control-label">Password</label>
            <div className="col-sm-10">
              <input type="password" className="form-control" id="inputPassword3" placeholder="Password"/>
            </div>
          </div>
        </form>
      </div>
    </div>
)