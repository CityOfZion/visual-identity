import React from 'react'
import BasicBreadcrumbs from './BasicBreadcrumbs/BasicBreadcrumbs'
import DashBreadcrumbs from './DashBreadcrumbs/DashBreadcrumbs'
import SolidBreadcrumbs from './SolidBreadcrumbs/SolidBreadcrumbs'

export default () => (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="section-header">
            <div className="section-icon">
              <i className="material-icons">format_size</i>
            </div>
            <div className="section-title">
              <h3>Breadcrumbs</h3>
              <small>. &nbsp;&nbsp; . &nbsp;&nbsp; . &nbsp;&nbsp; . &nbsp;&nbsp; .</small>
            </div>
          </div>
          <hr/>
        </div>
      </div>
      
      <div className="row">      
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-12">
              <h3>Default breadcrumbs</h3>
            </div>
          </div>
          <div className="row">
            <BasicBreadcrumbs />
          </div>
        </div>  

        <div className="col-md-4">
          <div className="row">
            <div className="col-md-12">
              <h3>Dash breadcrumbs</h3>
            </div>
          </div>
          <div className="row">
            <DashBreadcrumbs />
          </div>
        </div>  

        <div className="col-md-4">
          <div className="row">
            <div className="col-md-12">
              <h3>Solid breadcrumbs</h3>
            </div>
          </div>
          <div className="row">
            <SolidBreadcrumbs />
          </div>
        </div>  
      </div>
  
    </div>
)