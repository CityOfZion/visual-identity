import React from 'react'
import BasicProgressBar from './BasicProgressBar/BasicProgressBar'
import LabelProgressBar from './LabelProgressBar/LabelProgressBar'
import StackedProgressBar from './StackedProgressBar/StackedProgressBar'

export default () => (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="section-header">
            <div className="section-icon">
              <i className="material-icons">format_size</i>
            </div>
            <div className="section-title">
              <h3>Progress Bars</h3>
              <small>Never backward, always forward. Always.</small>
            </div>
          </div>
          <hr/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h3>Basic Progress Bars</h3>
        </div>
      </div>
      <div className="row">
        <BasicProgressBar />
      </div>
      
      <div className="row">
        <div className="col-md-12">
          <h3>Labelled Progress Bars</h3>
        </div>
      </div>
      <div className="row">
        <LabelProgressBar />
      </div>
  
      <div className="row">
        <div className="col-md-12">
          <h3>Stacked Progress Bars</h3>
        </div>
      </div>
      <div className="row">
        <StackedProgressBar />
      </div>
    </div>
)