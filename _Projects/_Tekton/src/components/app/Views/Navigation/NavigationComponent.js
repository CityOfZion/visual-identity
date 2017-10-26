import React from 'react'
import BasicNavigation from './BasicNavigation/BasicNavigation'
import BrandNavigation from './BrandNavigation/BrandNavigation'


export default () => (
    
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="section-header">
            <div className="section-icon">
              <i className="material-icons">format_size</i>
            </div>
            <div className="section-title">
              <h3>Navigation</h3>
              <small>Where do you want to go today?</small>
            </div>
          </div>
          <hr/>
        </div>
      </div>
      <div className="row">
        <BasicNavigation />
      </div>
      <div className="row">
        <BrandNavigation />
      </div>
  
  
    </div>
)