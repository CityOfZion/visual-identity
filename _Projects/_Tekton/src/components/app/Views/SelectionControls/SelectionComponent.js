import React from 'react'
import Checkboxes from './Checkboxes/Checkboxes'
import RadioButtons from './RadioButtons/RadioButtons'
import Switches from './Switches/Switches'

export default () => (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="section-header">
            <div className="section-icon">
              <i className="material-icons">format_size</i>
            </div>
            <div className="section-title">
              <h3>Selection Controls</h3>
              <small>Select it, switch it, check it! Technologic.</small>
            </div>
          </div>
          <hr/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-12">
              <h3>Checkboxes</h3>
            </div>
          </div>
          <div className="row">
            <Checkboxes />
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-12">
              <h3>Radio Buttons</h3>
            </div>
          </div>
          <div className="row">
            <RadioButtons />
          </div>
        </div>
  
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-12">
              <h3>Switches</h3>
            </div>
          </div>
          <div className="row">
            <Switches />
          </div>
        </div>  
      </div>
    </div>
)