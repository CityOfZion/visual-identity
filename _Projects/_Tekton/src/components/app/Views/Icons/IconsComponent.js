import React from 'react'
import FontAwesome from './FontAwesome'

export default () => (
  <div>
    <div className="row">
      <div className="col-md-12">
        <div className="section-header">
          <div className="section-icon">
            <i className="material-icons">view_compact</i>
          </div>
          <div className="section-title">
            <h3>Icons</h3>
            <small>Description here</small>
          </div>
        </div>
        <hr/>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6">
        <h3>Material Icons</h3>
      </div>
      <div className="col-md-6">
        <h3>Font Awesome</h3>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6">
        <p><a href="https://material.io/icons/">Material Design icons</a></p>
      </div>
      <div className="col-md-6">
        <p>You can use the FontAwesome icons below</p>
        <FontAwesome />
      </div>
    </div>
  </div>
)