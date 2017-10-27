import React from 'react'
import BasicButtons from './BasicButtons/BasicButtons';
import GradientButtons from './GradientButtons/GradientButtons';
import OutlineButtons from './OutlineButtons/OutlineButtons';
import ChippedButtons from './ChippedButtons/ChippedButtons';
import RoundedButtons from './RoundedButtons/RoundedButtons';
import SquareButtons from './SquareButtons/SquareButtons';
import SizesButtons from './SizesButtons/SizesButtons';
import BlockButtons from './BlockButtons/BlockButtons';
import GroupedButtons from './GroupedButtons/GroupedButtons';
import IconButtons from './IconButtons/IconButtons';
import RoundIconButtons from './RoundIconButtons/RoundIconButtons';

/*import PrimaryButton from '../../../lib/elements/Buttons/PrimaryButton.js' Leftover import from making this into an actual React lib <PrimaryButton>Click Me!</PrimaryButton> */

export default () => (
  <div>
  
    <div className="row">
      <div className="col-md-12">
        <div className="section-header">
          <div className="section-icon">
            <i className="material-icons">crop_7_5</i>
          </div>
          <div className="section-title">
            <h3>Buttons</h3>
            <small>Ooohh, what does this button do?</small>
          </div>
        </div>
        <hr/>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <h3>Basic Buttons</h3>
      </div>
    </div>
    <BasicButtons />
  
    <div className="row">
      <div className="col-md-12">
        <h3>Gradient Buttons</h3>
      </div>
    </div>
    <GradientButtons />
  
    <div className="row">
      <div className="col-md-12">
        <h3>Outline Buttons</h3>
      </div>
    </div>
    <OutlineButtons />
    
    <div className="row">
      <div className="col-md-12">
        <h3>Chipped Buttons</h3>
      </div>
    </div>
    <ChippedButtons />
  
    <div className="row">
      <div className="col-md-12">
        <h3>Rounded & Square Buttons</h3>
      </div>
    </div>
    <div className="row">
      <RoundedButtons />
      <SquareButtons />
    </div>
  
    <div className="row">
      <div className="col-md-12">
        <h3>Button Sizes, Icons and Blocks</h3>
      </div>
    </div>
    <div className="row">
      <SizesButtons />
      <BlockButtons />
      <IconButtons />
    </div>
    <div className="row">
      <GroupedButtons />
    </div>
    <div className="row">
      <RoundIconButtons />
    </div>
  </div>
  
)

