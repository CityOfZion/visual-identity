import React from 'react'
import BasicDropDown from './BasicDropDown/BasicDropDown'
import SplitDropDown from './SplitDropDown/SplitDropDown'
import OutlineDropDown from './OutlineDropDown/OutlineDropDown'


export default () => (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="section-header">
            <div className="section-icon">
              <i className="material-icons">format_size</i>
            </div>
            <div className="section-title">
              <h3>Dropdowns</h3>
              <small>Drop it down low!</small>
            </div>
          </div>
          <hr/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h3>Basic Dropdown</h3>
        </div>
      </div>
      <div className="row">
        <BasicDropDown />
      </div>
      <div className="row margin-top-40">
        <div className="col-md-12">
          <h3>Split Dropdown</h3>
        </div>
      </div>
      <div className="row">
        <SplitDropDown />
      </div>
      <div className="row margin-top-40">
        <div className="col-md-12">
          <h3>Outline Dropdown</h3>
        </div>
      </div>
      <div className="row">
        <OutlineDropDown />
      </div>
    </div>
)