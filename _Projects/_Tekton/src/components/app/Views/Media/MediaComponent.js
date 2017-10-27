import React from 'react'

import DefaultMedia from './DefaultMedia'
import OutlineMedia from './OutlineMedia'
import SolidMedia from './SolidMedia'

export default () => (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="section-header">
            <div className="section-icon">
              <i className="material-icons">format_size</i>
            </div>
            <div className="section-title">
              <h3>Media elements</h3>
              <small>Not the social kind?</small>
            </div>
          </div>
          <hr/>
        </div>
      </div>
  
      <div className="row">
        <div className="col-md-4">
          <div className="row">
            <h3>Default Media object</h3>
          </div>
          <div className="row">
            <DefaultMedia />
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="row">
            <h3>Outline Media object</h3>
          </div>
          <div className="row">
            <OutlineMedia />
          </div>
        </div>
  
        <div className="col-md-4">
          <div className="row">
            <h3>Solid Media object</h3>
          </div>
          <div className="row">
            <SolidMedia />
          </div>
        </div>  
      </div>
  
  
    </div>
)