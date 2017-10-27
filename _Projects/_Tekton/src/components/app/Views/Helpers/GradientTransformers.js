import React from 'react'

export default () => (
  <div>
    <div className="col-md-6">
      <div className="demo panel">
        <div className="panel-heading">
          Gradient Directions
        </div>
        <div className="panel-body">
          <p>The default gradient buttons default from the left to the right. You can change the gradient direction with the following classes</p>
          <p>
            <a className="btn btn-primary btn-gradient">Left to Right </a> - <code>Default button</code>
          </p>
          <p>
            <a className="btn btn-primary btn-gradient gradient-top">Top to Bottom </a> - <code>.gradient-top</code>
          </p>
          <p>
            <a className="btn btn-primary btn-gradient gradient-diagonally-top">Diagonal to Top </a> - <code>.gradient-diagonally-top</code>
          </p>
          <p>
            <a className="btn btn-primary btn-gradient gradient-diagonally-bottom">Diagonal to Bottom </a> - <code>.gradient-diagonally-bottom</code>
          </p>
          <p>
            <a className="btn btn-primary btn-gradient gradient-bottom">Bottom to Top </a> - <code>.gradient-bottom</code>
          </p>
        <div>            
      </div>
    </div>
  </div>
</div>
  <div className="col-md-6">
      <div className="demo panel">
        <div className="panel-heading">
          Applies to all gradient buttons
        </div>
        <div className="panel-body">
          <p>&nbsp;</p>
          <p>
            <a className="btn btn-default btn-gradient">Left to Right </a> - <code>Default button</code>
          </p>
          <p>
            <a className="btn btn-info btn-gradient gradient-top">Top to Bottom </a> - <code>.gradient-top</code>
          </p>
          <p>
            <a className="btn btn-success btn-gradient gradient-diagonally-top">Diagonal to Top </a> - <code>.gradient-diagonally-top</code>
          </p>
          <p>
            <a className="btn btn-warning btn-gradient gradient-diagonally-bottom">Diagonal to Bottom </a> - <code>.gradient-diagonally-bottom</code>
          </p>
          <p>
            <a className="btn btn-danger btn-gradient gradient-bottom">Bottom to Top </a> - <code>.gradient-bottom</code>
          </p>
        <div>            
      </div>
    </div>
  </div>
</div>
</div>
)