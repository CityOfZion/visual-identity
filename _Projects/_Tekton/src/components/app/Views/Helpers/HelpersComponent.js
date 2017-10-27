import React from 'react'
import NoTransitions from './NoTransitions'
import PaddingHelpers from './PaddingHelpers'
import MarginHelpers from './MarginHelpers'
import NoShadows from './NoShadows'
import NoBorderRadius from './NoBorderRadius'
import ShadowLevels from './ShadowLevels'
import BorderRadius from './BorderRadius'
import GradientTransformers from './GradientTransformers'
import TextDecoration from './TextDecoration'


export default () => (
  <div>
    <div className="row">
      <div className="col-md-12">
        <div className="section-header">
          <div className="section-icon">
            <i className="material-icons">help</i>
          </div>
          <div className="section-title">
            <h3>Helpers</h3>
            <small>With a little help from my friends</small>
          </div>
        </div>
        <hr/>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <h3>Text helpers</h3>
      </div>
    </div>
    <div className="row">
      <TextDecoration />
    </div>
    <div className="row">
      <div className="col-md-12">
        <h3>Margin & Padding helpers</h3>
      </div>
    </div>
    <div className="row">
      <MarginHelpers />
    </div>
    <div className="row">
      <PaddingHelpers />
    </div>
    <div className="row">
      <div className="col-md-12">
        <h3>Remove attributes</h3>
      </div>
    </div>
    <div className="row">
      <NoTransitions />
      <NoShadows />
      <NoBorderRadius />
    </div>
    <div className="row">
      <div className="col-md-8">
        <h3>Shadow Levels</h3>
      </div>
      <div className="col-md-4">
        <h3>Border Radius</h3>        
      </div>
    </div>
    <div className="row">
      <ShadowLevels />
      <BorderRadius />
    </div>
    <div className="row">
      <div className="col-md-12">
        <h3>Gradient Transformers</h3>
      </div>
    </div>
    <div className="row">
      <GradientTransformers />
    </div>
  </div>
)