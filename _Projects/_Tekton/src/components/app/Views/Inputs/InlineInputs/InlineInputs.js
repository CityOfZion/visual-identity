import React from 'react'

export default () => (
    <div>
      <div className="col-md-12">
        <form className="form-inline">
          <div className="form-group margin-right-10">
            <label className="margin-right-10" for="exampleInputName2">Name</label>
            <input type="text" className="form-control" id="exampleInputName2" placeholder="Jane Doe"/>
          </div>
          <div className="form-group">
            <label className="margin-right-10" for="exampleInputEmail2">Email</label>
            <input type="email" className="form-control" id="exampleInputEmail2" placeholder="jane.doe@example.com"/>
          </div>
        </form>
      </div>
      <div className="col-md-12 margin-top-10">
        <form className="form-inline">
          <div className="form-group form-group-outline margin-right-10">
            <label className="margin-right-10" for="exampleInputName2">Name</label>
            <input type="text" className="form-control" id="exampleInputName2" placeholder="Jane Doe"/>
          </div>
          <div className="form-group form-group-outline">
            <label className="margin-right-10" for="exampleInputEmail2">Email</label>
            <input type="email" className="form-control" id="exampleInputEmail2" placeholder="jane.doe@example.com"/>
          </div>
        </form>
      </div>
    </div>
)