import React from 'react'

export default () => (
    <div>
      <div className="col-md-12">
  
        <div className="switch">
          <input type="checkbox" id="switch1" />
          <label for="switch1"></label>
          <p>Default switch</p>          
        </div>
        
        <div className="switch switch-primary">
          <input type="checkbox" id="switch2" />
          <label for="switch2"></label>
          <p>Primary switch</p>          
        </div>
        
        <div className="switch switch-info">
          <input type="checkbox" id="switch3" />
          <label for="switch3"></label>
          <p>Info switch</p>          
        </div>  
  
        <div className="switch switch-success">
          <input type="checkbox" id="switch4" />
          <label for="switch4"></label>
          <p>Success switch</p>          
        </div>  
      
        <div className="switch switch-warning">
          <input type="checkbox" id="switch5" />
          <label for="switch5"></label>
          <p>Warning switch</p>          
        </div>  
        
        <div className="switch switch-danger">
          <input type="checkbox" id="switch6" />
          <label for="switch6"></label>
          <p>Danger switch</p>          
        </div>  
  
  
      </div>
    </div>
)