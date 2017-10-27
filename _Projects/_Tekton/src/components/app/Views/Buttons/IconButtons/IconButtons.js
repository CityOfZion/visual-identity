import React from 'react'

export default () => (  

      <div className="col-md-4">
        <div className="demo panel">
          <div className="panel-heading">
            Icon Buttons
          </div>
          <div className="panel-body">
            <p>Add icons to either the right or the left of a button.</p>
            <div>
              <a href="" className="btn btn-default"><i className="fa fa-bar-chart"></i>Default button</a>
              <a href="" className="btn btn-primary">
                <i className="fa fa-github"></i>
                Primary button
              </a>
              <a href="" className="btn btn-success"><i className="fa fa-check"></i>Success button</a>
              <a href="" className="btn btn-info">Info button <i className="fa fa-info-circle"></i></a>
              <a href="" className="btn btn-warning">Warning button <i className="fa fa-bell"></i></a>
              <a href="" className="btn btn-danger">Danger button<i className="fa fa-exclamation"></i></a> 
            </div>
          </div>
        </div>
      </div> 
)