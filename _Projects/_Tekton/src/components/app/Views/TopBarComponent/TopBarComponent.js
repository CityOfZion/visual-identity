import React from 'react'
import logo from './logo.svg'
import profile from './profile.jpg'

export default () => (
  <div>
    <nav className="demo navbar navbar-default navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <div id="mobile-menu">
            <div className="left-nav-toggle">
              <a href=""><i className="material-icons">menu</i></a>
            </div>
          </div>
          <a href="" className="demo navbar-brand">
            <img src={logo} alt="Tekton logo" className="logo"/>
            Tekton
            <small>v.0.1</small>
          </a>
        </div>
        <div id="navbar" className="demo navbar-collapse collapse">
          <div className="left-nav-toggle">
            <a href=""><i className="material-icons">menu</i></a>
          </div>
          <ul className="demo nav navbar-nav navbar-right">
            <li className="profile-link">
              <a href="">
                <span className="profile-name">
                  TheMstrShake  
                </span>
                <img src={profile} alt="" className="img-circle" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>  
)