import React from 'react'

export default () => (
    <div className="col-md-4">
      <div className="demo panel">
        <div className="panel-heading">
          Shadow Levels
        </div>
        <div className="panel-body">
          <p>Add <code>.no-shadows</code> to any element to remove all shadows.</p>
          <p><button className="btn btn-primary no-shadows">No shadows</button></p>
          <p>Add <code>.no-shadows-hover</code> to any element to remove all shadows on <code>:hover</code></p>
          <p><button className="btn btn-primary no-shadows-hover">No shadows on hover</button></p>
        <div>            
      </div>
    </div>
  </div>
</div>
)