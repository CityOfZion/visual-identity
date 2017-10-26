import React from 'react'
import BasicPagination from './BasicPagination/BasicPagination'
import SizingPagination from './SizingPagination/SizingPagination'
import PagerPagination from './PagerPagination/PagerPagination'

export default () => (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="section-header">
            <div className="section-icon">
              <i className="material-icons">format_size</i>
            </div>
            <div className="section-title">
              <h3>Pagination</h3>
              <small>Get everyone on the same page</small>
            </div>
          </div>
          <hr/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-12">
              <h3>Basic Pagination</h3>
            </div>
          </div>
          <div className="row">
            <BasicPagination />
          </div>
        </div>
  
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-12">
              <h3>Pagination Sizing</h3>
            </div>
          </div>
          <div className="row">
            <SizingPagination />
          </div>
        </div>
  
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-12">
              <h3>Pager Pagination</h3>
            </div>
          </div>
          <div className="row">
            <PagerPagination />
          </div>
        </div>
      </div>  
    </div>
)