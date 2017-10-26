import React from 'react'
import Alerts from './Alerts/Alerts'
import DismissableAlerts from './DismissableAlerts/DismissableAlerts'
import AlertLinks from './AlertLinks/AlertLinks'
import Toastr from './Toastr/Toastr'

export default () => (
  <div>
    <div className="row">
      <div className="col-md-12">
        <div className="section-header">
          <div className="section-icon">
            <i className="material-icons">alarm</i>
          </div>
          <div className="section-title">
            <h3>Alerts</h3>
            <small>Gentle nudge or nuclear meltdown? Your choice!</small>
          </div>
        </div>
        <hr/>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4">
        <div className="row">
          <div className="col-md-12">
            <h3>Basic Alerts</h3>
          </div>
        </div>
        <div className="row">
          <Alerts />
        </div>
      </div>
      <div className="col-md-4">
        <div className="row">
          <div className="col-md-12">
            <h3>Dismissable Alerts</h3>
          </div>
        </div>
        <div className="row">
          <DismissableAlerts /> 
        </div>
      </div>
      <div className="col-md-4">
        <div className="row">
          <div className="col-md-12">
            <h3>Alert Links</h3>
          </div>
        </div>
        <div className="row">
          <AlertLinks />
        </div>
      </div>
    </div>    
  
    <div className="row">
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-12">
            <h3>Toastr</h3>
          </div>
        </div>
        <div className="row">
          <Toastr />
        </div>
      </div>
    </div> 
  
  </div>
)