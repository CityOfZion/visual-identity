import React from 'react'
import SideMenuItem from './SideMenuItem/SideMenuItem';
import SideMenuCategory from './SideMenuItem/SideMenuCategory';

export default () => (
  <div>
    <aside className="navigation">
      <nav>
        <ul className="nav tekton-nav">
  
          <SideMenuCategory name="Main" />
          <SideMenuItem name="Home" route="/dashboard" />
  
          <SideMenuCategory name="UI Components" />        
          <SideMenuItem name="Dropdowns" route="/dropdowns" />
          <SideMenuItem name="Buttons" route="/buttons" />
          <SideMenuItem name="Typography" route="/typography" />
          <SideMenuItem name="Icons" route="/icons" />
          <SideMenuItem name="Selection controls" route="/selection-controls" />
          <SideMenuItem name="Inputs" route="/inputs" />
          <SideMenuItem name="Tabs" route="/tabs" />
          <SideMenuItem name="Navigation" route="/navigation" />
          <SideMenuItem name="Breadcrumbs" route="/breadcrumbs" />
          <SideMenuItem name="Pagination" route="/pagination" />  
          <SideMenuItem name="Labels & Badges" route="/labels-badges" />        
          <SideMenuItem name="Alerts" route="/alerts" />              
          <SideMenuItem name="Modals" route="/modals" />        
          <SideMenuItem name="Progress Bars" route="/progress-bars" /> 
          <SideMenuItem name="Loaders" route="/loaders" />
          <SideMenuItem name="Media" route="/media" />    
          <SideMenuItem name="Panels" route="/panels" />        
          <SideMenuItem name="Tables" route="/tables" />        
          <SideMenuItem name="Responsive Embed" route="/responsive-embed" />
          <SideMenuItem name="Wells" route="/wells" />
          <SideMenuItem name="Helpers" route="/helpers" />
  
          <li className="tekton-info">
            <div className="tekton-info-text">
              Made with 
              <i className="material-icons">favorite</i> 
              <br/>  
              Feel free to donate NEO/GAS to: 
              <a href="">
                AMsrgUK3CWdhiuujDh1yrpWwqt5tc6BLdY
              </a>
            </div>            
          </li>
        </ul>
      </nav>
    </aside>
  </div>
)