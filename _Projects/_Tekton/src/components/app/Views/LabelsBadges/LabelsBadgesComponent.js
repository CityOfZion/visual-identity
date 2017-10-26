import React from 'react'

export default () => (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="section-header">
            <div className="section-icon">
              <i className="material-icons">format_size</i>
            </div>
            <div className="section-title">
              <h3>Labels & Badges</h3>
              <small>I need your gun and badge..</small>
            </div>
          </div>
          <hr/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h3>Basic Labels</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h1>Example heading <span className="label label-default">New</span></h1>
          <hr/>
          <h2>Example heading <span className="label label-default">New</span></h2>
          <hr/>
          <h3>Example heading <span className="label label-default">New</span></h3>
          <hr/>
          <h4>Example heading <span className="label label-default">New</span></h4>
          <hr/>
          <h5>Example heading <span className="label label-default">New</span></h5>
          <hr/>
          <h6>Example heading <span className="label label-default">New</span></h6>
        </div>
        <div className="col-md-6">
          <h1>Example heading <span className="label label-default">Default</span></h1>
          <hr/>
          <h2>Example heading <span className="label label-primary">Primary</span></h2>
          <hr/>
          <h3>Example heading <span className="label label-info">Info</span></h3>
          <hr/>
          <h4>Example heading <span className="label label-success">Success</span></h4>
          <hr/>
          <h5>Example heading <span className="label label-warning">Warning</span></h5>
          <hr/>
          <h6>Example heading <span className="label label-danger">Danger</span></h6>
          <hr/>
          <span className="label label-default margin-right-10">Default</span>
          <span className="label label-primary margin-right-10">Primary</span>
          <span className="label label-success margin-right-10">Success</span>
          <span className="label label-info margin-right-10">Info</span>
          <span className="label label-warning margin-right-10">Warning</span>
          <span className="label label-danger margin-right-10">Danger</span>
        </div>        
      </div>
  
      <div className="row">
        <div className="col-md-12">
          <h3>Basic Badges</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <a href="">Inbox <span className="badge">42</span></a> <br/><br/>
          <button className="btn btn-primary" type="button">
            Messages <span className="badge">4</span>
          </button>
        </div>
      </div>
  
    </div>
)