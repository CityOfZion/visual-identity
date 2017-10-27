import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export default class SideMenuItem extends Component {
  render = () => {
    return (
      <div>
        <li>
          <NavLink to={this.props.route} className="" activeClassName="active">
            {this.props.name}
          </NavLink>       
        </li>
      </div>
    )
  }
}