import React from 'react'
import Headings from './Headings/Headings'
import BodyText from './BodyText/BodyText'
import Lists from './Lists/Lists'
import Blockquotes from './Blockquotes/Blockquotes'
import Descriptions from './Descriptions/Descriptions'

export default () => (
  <div>
    <div className="row">
      <div className="col-md-12">
        <div className="section-header">
          <div className="section-icon">
            <i className="material-icons">format_size</i>
          </div>
          <div className="section-title">
            <h3>Typography</h3>
            <small><span className="wuz-here">Helvetica wuz here!</span></small>
          </div>
        </div>
        <hr/>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <h3>Headings</h3>
      </div>
    </div>
    <div className="row">
      <Headings />
    </div>
    <div className="row">
      <div className="col-md-12">
        <h3>Body text</h3>
      </div>
    </div>
    <div className="row">
      <BodyText />
    </div>    
    <div className="row">
      <div className="col-md-12">
        <h3>Lists</h3>
      </div>
    </div>
    <div className="row">
      <Lists />
    </div>
    <div className="row">
      <div className="col-md-12">
        <h3>Blockquotes</h3>
      </div>
    </div>
    <div className="row">
      <Blockquotes />
    </div>
    <div className="row">
      <div className="col-md-12">
        <h3>Descriptions</h3>
      </div>
    </div>
    <div className="row">
      <Descriptions />
    </div>
  </div>
)