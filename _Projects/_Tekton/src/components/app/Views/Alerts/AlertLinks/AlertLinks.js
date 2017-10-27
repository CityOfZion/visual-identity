import React from 'react'

export default () => (  
    <div>
      <div className="col-md-12">
        <div className="alert alert-default alert-dismissable" role="alert">
          <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <strong>Listen!</strong> <a href="" className="alert-link">Listen</a> to my words.
        </div>
        <div className="alert alert-primary alert-dismissable" role="alert">
          <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <strong>CoZ Alert!</strong> <a href="" className="alert-link">This is your last chance</a>. After this, there is no turning back.
        </div>
        <div className="alert alert-info alert-dismissable" role="alert">
          <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <strong>Heads up!</strong> <a href="" className="alert-link">This alert needs your attention</a>, but it's not super important.
        </div>
        <div className="alert alert-success alert-dismissable" role="alert">
          <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <strong>Well done!</strong> <a href="" className="alert-link">You successfully read</a> this important alert message.
        </div>
        <div className="alert alert-warning alert-dismissable" role="alert">
          <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <strong>Warning!</strong> <a href="" className="alert-link">Better check yourself</a>, you're not looking too good.
        </div>
        <div className="alert alert-danger alert-dismissable" role="alert">
          <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <strong>Oh snap!</strong> <a href="" className="alert-link">Change a few things</a> up and try submitting again.
        </div>
      </div>
    </div>  
)