import React from 'react'
import ResponsiveEmbed16by9 from './Responsive16by9';
import ResponsiveEmbed4by3 from './Responsive4by3';

export default () => (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="section-header">
            <div className="section-icon">
              <i className="material-icons">format_size</i>
            </div>
            <div className="section-title">
              <h3>Responsive Embed</h3>
              <small>Always embed responsively</small>
            </div>
          </div>
          <hr/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <p>Allow browsers to determine video or slideshow dimensions based on the width of their containing block by creating an intrinsic ratio that will properly scale on any device. </p>
          <p>Rules are directly applied to <code>&lt;iframe&gt;</code>, <code>&lt;embed&gt;</code>, <code>&lt;video&gt;</code> and <code>&lt;object&gt;</code> elements; optionally use an explicit descendant class <code>.embed-responsive-item</code> when you want to match the styling for other attributes.</p>
          <p><strong className="color-primary">Pro-Tip!</strong> You don't need to include <code>frameborder="0"</code> in your <code>&lt;iframe&gt;</code> as we override that for you.</p>
        </div>        
      </div>
      <div className="row">
        <div className="col-md-6">
          <h3>16:9 Aspect Ratio</h3>
          <ResponsiveEmbed16by9 />
        </div>
        <div className="col-md-6">
          <h3>4:3 Aspect Ratio</h3>
          <ResponsiveEmbed4by3 />
        </div>
      </div>
    </div>
)