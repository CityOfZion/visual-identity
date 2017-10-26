import React from 'react'
import BasicTables from './BasicTables/BasicTables'
import StripedTables from './StripedTables/StripedTables'
import BorderedTables from './BorderedTables/BorderedTables'
import StripedBorderedTables from './StripedBorderedTables/StripedBorderedTables'

export default () => (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="section-header">
            <div className="section-icon">
              
              <i className="fa fa-table"></i>
            </div>
            <div className="section-title">
              <h3>Tables</h3>
              <small>Not to put stuff on, put to put stuff in</small>
            </div>
          </div>
          <hr/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h3>Basic Table</h3>
          <div className="row">
            <BasicTables />
          </div>
        </div>
        <div className="col-md-6">
          <h3>Striped Hover Table</h3>
          <div className="row">
            <StripedTables />
          </div>
        </div>
      </div>
  
      <div className="row">
        <div className="col-md-6">
          <h3>Bordered Table</h3>
          <div className="row">
            <BorderedTables />
          </div>
        </div>
        <div className="col-md-6">
          <h3>Bordered Striped Table</h3>
          <div className="row">
            <StripedBorderedTables />
          </div>
        </div>
      </div>
    </div>
)