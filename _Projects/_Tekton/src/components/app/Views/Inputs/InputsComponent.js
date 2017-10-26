import React from 'react'
import BasicInputs from './BasicInputs/BasicInputs'
import OutlineInputs from './OutlineInputs/OutlineInputs'
import HorizontalInputs from './HorizontalInputs/HorizontalInputs'
import InlineInputs from './InlineInputs/InlineInputs'

export default () => (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="section-header">
            <div className="section-icon">
              <i class="material-icons">input</i>
            </div>
            <div className="section-title">
              <h3>Inputs</h3>
              <small>For putting stuff in, *giggity*</small>
            </div>
          </div>
          <hr/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
    
          <div className="row">
            <div className="col-md-12">
              <h3>Basic Form</h3>
            </div>
          </div>
          <div className="row">
            <BasicInputs />
          </div>
  
          <div className="col-md-12">
          <div className="row">
            <div className="col-md-12">
              <h3>Horizontal Form</h3>
            </div>
          </div>
          <div className="row">
            <HorizontalInputs />
          </div>
  
        </div>
  
        </div>
        <div className="col-md-6">
          
          <div className="col-md-12">
          <div className="row">
            <div className="col-md-12">
              <h3>Outline Form</h3>
            </div>
          </div>
          <div className="row">
            <OutlineInputs />
          </div>
        </div>
      
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-12">
              <h3>Inline Form</h3>
            </div>
          </div>
          <div className="row">
            <InlineInputs />
          </div>
        </div>
  
        </div>
      </div>
        
    </div>
)
