import React from 'react'

export default () => (
    <div>
      <div className="col-md-12">   
  
        <div className="radio">
          <input type="radio" name="radio1" id="radio1" value="option1" chec />
          <label for="radio1">
            Default radio
          </label>
        </div>
        <div className="radio">
          <input type="radio" name="radio1" id="radio2" value="option2" />
          <label for="radio2">
            Default radio
          </label>
        </div>                                   
      </div>
  
      <div className="col-md-12">       
        <div className="radio radio-primary">
          <input type="radio" name="radio2" id="radio3" value="option1" chec />
          <label for="radio3">
            Primary radio
          </label>
        </div>
        <div className="radio radio-primary">
          <input type="radio" name="radio2" id="radio4" value="option2" />
          <label for="radio4">
            Primary radio
          </label>
        </div>                                   
      </div>
  
      <div className="col-md-12">       
        <div className="radio radio-info">
          <input type="radio" name="radio3" id="radio5" value="option1" chec />
          <label for="radio5">
            Info radio
          </label>
        </div>
        <div className="radio radio-info">
          <input type="radio" name="radio3" id="radio6" value="option2" />
          <label for="radio6">
            Info radio
          </label>
        </div>                                   
      </div>
  
      <div className="col-md-12">       
        <div className="radio radio-success">
          <input type="radio" name="radio4" id="radio7" value="option1" chec />
          <label for="radio7">
            Success radio
          </label>
        </div>
        <div className="radio radio-success">
          <input type="radio" name="radio4" id="radio8" value="option2" />
          <label for="radio8">
            Success radio
          </label>
        </div>                                   
      </div>
  
      <div className="col-md-12">       
        <div className="radio radio-warning">
          <input type="radio" name="radio5" id="radio9" value="option1" chec />
          <label for="radio9">
            Warning radio
          </label>
        </div>
        <div className="radio radio-warning">
          <input type="radio" name="radio5" id="radio10" value="option2" />
          <label for="radio10">
            Warning radio
          </label>
        </div>                                   
      </div>
  
      <div className="col-md-12">       
        <div className="radio radio-danger">
          <input type="radio" name="radio6" id="radio11" value="option1" chec />
          <label for="radio11">
            Danger radio
          </label>
        </div>
        <div className="radio radio-danger">
          <input type="radio" name="radio6" id="radio12" value="option2" />
          <label for="radio12">
            Danger radio
          </label>
        </div>     
      <hr/>
      </div>
  
      <div className="col-md-12">       
        <div className="radio radio-success radio-inline">
          <input type="radio" name="radio7" id="radio13" value="option1" chec />
          <label for="radio13">
            Inline radio
          </label>
        </div>
        <div className="radio radio-danger radio-inline">
          <input type="radio" name="radio7" id="radio14" value="option2" />
          <label for="radio14">
            Inline radio
          </label>
        </div>                                  
      </div>      
  
    </div>
)