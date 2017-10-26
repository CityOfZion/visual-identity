import React from 'react'
import BasicTabs from './BasicTabs/BasicTabs'
import LineTabs from './LineTabs/LineTabs'
import OutlineTabs from './OutlineTabs/OutlineTabs'
import PillTabs from './PillTabs/PillTabs'

export default () => (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="section-header">
            <div className="section-icon">
              <i className="material-icons">tab</i>
            </div>
            <div className="section-title">
              <h3>Tabs</h3>
              <small>Or spaces?</small>
            </div>
          </div>
          <hr/>
        </div>
      </div>
      <div className="row">
  
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-12">
              <h3>Basic tabs</h3>
            </div>
          </div>
          <div className="row">
            <BasicTabs />
          </div>
          <div className="row margin-top-40">
            <div className="col-md-12">
              <h3>Outline tabs</h3>
            </div>
          </div>
          <div className="row">
            <OutlineTabs />
          </div>
          <div className="row margin-top-40">
            <div className="col-md-12">
              <h3>Pill tabs</h3>
            </div>
          </div>
          <div className="row">
            <PillTabs />
          </div>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-12">
              <h3>Line tabs</h3>
            </div>
          </div>
          <div className="row">
            <LineTabs />
          </div>
          
        </div>
      </div>
        
    </div>
)
