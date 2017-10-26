import React from 'react'
import BasicPanels from './BasicPanels/BasicPanels'
import AccentPanels from './AccentPanels/AccentPanels'
import GradientPanels from './GradientPanels/GradientPanels'
import OutlinePanels from './OutlinePanels/OutlinePanels'
import ChippedPanels from './ChippedPanels/ChippedPanels'

export default () => (
  <div>
    <div className="row">
      <div className="col-md-12">
        <div className="section-header">
          <div className="section-icon">
            <i className="material-icons">web_asset</i>
          </div>
          <div className="section-title">
            <h3>Panels</h3>
            <small>That's a panellin'</small>
          </div>
        </div>
        <hr/>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <h3>Basic panels</h3>
      </div>
    </div>
    <div className="row">
      <BasicPanels />
    </div>
    <div className="row">
      <div className="col-md-12">
        <h3>Transparent & Outline panels</h3>
      </div>
    </div>
    <OutlinePanels />
    <div className="row">
      <div className="col-md-12">
        <h3>Chipped panels</h3>
      </div>
    </div>
    <div className="row">
      <ChippedPanels />
    </div>
    <div className="row">
      <div className="col-md-12">
        <h3>Accent panels</h3>
      </div>
    </div>
    <div className="row">
      <AccentPanels />
    </div>
    <div className="row">
      <div className="col-md-12">
        <h3>Gradient panels</h3>
      </div>
    </div>
    <div className="row">
      <GradientPanels />
    </div>
  </div>
)