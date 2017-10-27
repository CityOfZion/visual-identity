import React from 'react'
import DefaultImage from './default.jpg'

export default () => (
  <div>
    <div className="col-md-12">
      <div className="media media-outline">
        <div className="media-left">
          <a href=""> <img alt="64x64" className="media-object" width="64" src={DefaultImage} /> </a>
        </div>
        <div className="media-body">
          <h4 className="media-heading">Media Left Aligned</h4>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </div>
      </div>
    <hr/>
  </div>

    
  <div className="col-md-12">
    <div className="media media-outline media-outline-primary">
      <div className="media-body">
        <h4 className="media-heading">Media Right Aligned</h4>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </div>
      <div className="media-right">
        <a href=""> <img alt="64x64" className="media-object" width="64" src={DefaultImage}/> </a>
      </div>
    </div>
    <hr/>
  </div>
    
  <div className="col-md-12">
    <div className="media media-outline media-outline-info">
      <div className="media-left">
        <a href=""> <img alt="64x64" className="media-object" width="64" src={DefaultImage} /> </a>
      </div>
      <div className="media-body">
        <h4 className="media-heading">Media Left Aligned</h4>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </div>
    </div>
    <hr/>
  </div>
    
  <div className="col-md-12">
    <div className="media media-outline media-outline-success">
      <div className="media-left">
        <a href=""> <img alt="64x64" className="media-object" width="64" src={DefaultImage}/> </a>
      </div>
      <div className="media-body">
        <h4 className="media-heading">Media Top Aligned</h4>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </div>
    </div>
    <hr/>
  </div>
    
  <div className="col-md-12">
    <div className="media media-outline media-outline-warning">
      <div className="media-left media-middle">
        <a href=""> <img alt="64x64" className="media-object" width="64" src={DefaultImage}/> </a>
      </div>
      <div className="media-body">
        <h4 className="media-heading">Media Middle Aligned</h4>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </div>
    </div>
  <hr/>
  </div>
    
  <div className="col-md-12">
    <div className="media media-outline media-outline-danger">
      <div className="media-left media-bottom">
        <a href=""> <img alt="64x64" className="media-object" width="64" src={DefaultImage}/> </a>
      </div>
      <div className="media-body">
        <h4 className="media-heading">Media Bottom Aligned</h4>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </div>
    </div>
  </div>
</div>
)