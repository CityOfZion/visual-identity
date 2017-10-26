import React from 'react'

export default () => (  
    <div>
      <div className="col-md-4">
        <div className="demo panel">
          <div className="panel-heading">
            Round Icon Buttons
          </div>
          <div className="panel-body">
            <p>Add <code>.btn-icon-round</code> to create a little round icon button. It defaults to 48px. You can use the button sizes to scale the button.</p>
            <div>
              <a href="" className="btn btn-default btn-icon-round"><i className="fa fa-cog"></i></a>
              <a href="" className="btn btn-primary btn-icon-round"><i className="fa fa-github"></i></a>
              <a href="" className="btn btn-success btn-icon-round"><i className="fa fa-check"></i></a>
              <br/>
              <a href="" className="btn btn-info btn-icon-round btn-xs"><i className="fa fa-info-circle"></i></a>
              <a href="" className="btn btn-warning btn-icon-round btn-sm"><i className="fa fa-bell"></i></a>
              <a href="" className="btn btn-danger btn-icon-round btn-lg"><i className="fa fa-exclamation"></i></a> 
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="demo panel">
          <div className="panel-heading">
            Square Icons Buttons
          </div>
          <div className="panel-body">
            <p>Add <code>.btn-icon-square</code> to create a square icon button. It defaults to 48px. You can use the button sizes to scale the button.</p>
            <div>
              <a href="" className="btn btn-default btn-icon-square"><i className="fa fa-cog"></i></a>
              <a href="" className="btn btn-primary btn-icon-square"><i className="fa fa-github"></i></a> 
              <a href="" className="btn btn-success btn-icon-square"><i className="fa fa-check"></i></a>
              <br/>
              <a href="" className="btn btn-info btn-icon-square btn-xs"><i className="fa fa-info-circle"></i></a>
              <a href="" className="btn btn-warning btn-icon-square btn-sm"><i className="fa fa-bell"></i></a>
              <a href="" className="btn btn-danger btn-icon-square btn-lg"><i className="fa fa-exclamation"></i></a> 
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="demo panel">
          <div className="panel-heading">
            Bringing it all together
          </div>
          <div className="panel-body">
            <p>You can combine the icon classes with other button classes for some cool effects.</p>
            <div>
              <a href="" className="btn btn-default btn-outline btn-icon-square"><i className="fa fa-cog"></i></a>
              <a href="" className="btn btn-primary btn-gradient btn-icon-round btn-lg gradient-diagonally-bottom"><i className="fa fa-github"></i></a>
              <a href="" className="btn btn-success btn-icon-square btn-xs"><i className="fa fa-plus"></i></a>
            </div>
          </div>
        </div>
      </div> 
    </div>
  )