import React from 'react'

export default () => (
    <div>
      <div className="col-md-4">
        <div className="progress">
          <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: 60+'%'}}>
            60%
          </div>
        </div>
      </div>
  
      <div className="col-md-4">
        <div className="progress">
          <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: 60+'%'}}>
            60%
          </div>
        </div>
      </div>
  
      <div className="col-md-4">
        <div className="progress">
          <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: 60+'%'}}>
            60%
          </div>
        </div>
      </div>
  
      <div className="col-md-4">
        <div className="progress">
          <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: 60+'%'}}>
            Transferring..
          </div>
        </div>
      </div>
  
      <div className="col-md-4">
        <div className="progress">
          <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: 60+'%'}}>
            Investigating..
          </div>
        </div>
      </div>
  
      <div className="col-md-4">
        <div className="progress">
          <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: 60+'%'}}>
            Deleting files..
          </div>
        </div>
      </div>
  
      
      <div className="col-md-12"><hr/></div>
  
      <div className="col-md-4">
        <div className="progress">
          <div className="progress-bar progress-bar-coz" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: 60+'%'}}>
            60%
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="progress">
          <div className="progress-bar progress-bar-neo" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: 60+'%'}}>
            60%
          </div>
        </div>
      </div>
  
    </div>
)