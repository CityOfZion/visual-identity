import React from 'react'
import DefaultModals from './DefaultModals/DefaultModals'

export default () => (
  <div>
    <div className="row">
      <div className="col-md-12">
        <div className="section-header">
          <div className="section-icon">
            <i className="material-icons">view_compact</i>
          </div>
          <div className="section-title">
            <h3>Modals</h3>
            <small>Did you know modal is also a fabric?</small>
          </div>
        </div>
        <hr/>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h3>Default Modals</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <p>
            <button type="button" class="btn btn-primary btn-gradient" data-toggle="modal" data-target="#DefaultModal">Open default modal</button>
          </p>
          <div>
            <DefaultModals />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h3>Outline Modals</h3>
        </div>
      </div>
    </div>
  </div>
)