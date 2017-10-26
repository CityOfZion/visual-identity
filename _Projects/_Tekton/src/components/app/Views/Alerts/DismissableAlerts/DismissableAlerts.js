import React from 'react'

export default () => (  
    <div>
      <div className="col-md-12">
        <div className="alert alert-default alert-dismissable fade in" role="alert">
          <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <strong>Listen!</strong> Listen to my words.
        </div>
        <div className="alert alert-primary alert-dismissable fade in" role="alert">
          <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <strong>CoZ Alert!</strong> This is your last chance. After this, there is no turning back.
        </div>
        <div className="alert alert-info alert-dismissable fade in" role="alert">
          <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
        </div>
        <div className="alert alert-success alert-dismissable fade in" role="alert">
          <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <strong>Well done!</strong> You successfully read this important alert message.
        </div>
        <div className="alert alert-warning alert-dismissable fade in" role="alert">
          <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <strong>Warning!</strong> Better check yourself, you're not looking too good.
        </div>
        <div className="alert alert-danger alert-dismissable fade in" role="alert">
          <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <strong>Oh snap!</strong> Change a few things up and try submitting again.
        </div>
      </div>
    </div>  
)