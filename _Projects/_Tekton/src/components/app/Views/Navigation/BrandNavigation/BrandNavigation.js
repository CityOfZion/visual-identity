import React from 'react'
import logo from './../logo.svg'
export default () => (
    <div>
      <div className="col-md-12">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand coz-logo" href="">
                <img alt="Brand" src={logo} />
                <p>Tekton</p>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
)