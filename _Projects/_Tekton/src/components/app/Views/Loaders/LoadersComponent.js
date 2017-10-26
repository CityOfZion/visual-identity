import React from 'react'
import CircleLoaders from './CircleLoaders'
import SquareLoaders from './SquareLoaders'
import SpecialLoaders from './SpecialLoaders'


export default () => (
  <div>
    <div className="row">
      <div className="col-md-12">
        <div className="section-header">
          <div className="section-icon">
            <i className="material-icons">view_compact</i>
          </div>
          <div className="section-title">
            <h3>Loaders</h3>
            <small>Keep loadin', loadin', loadin'</small>
          </div>
        </div>
        <hr/>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h3>Circular Loaders</h3>
        </div>
        <div className="col-md-6">
          <h3>Square Loaders</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <CircleLoaders />
        </div>
        <div className="col-md-6">
          <SpecialLoaders />
          <SquareLoaders />
        </div>
      </div>
    </div>
  </div>
)