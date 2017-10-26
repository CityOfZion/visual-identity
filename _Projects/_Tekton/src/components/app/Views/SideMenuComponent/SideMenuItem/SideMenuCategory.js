import React, { Component } from 'react';

export default class SideMenuCategory extends Component {
  render = () => {
    return (
      <div>
        <li className="nav-category">
          {this.props.name}
        </li>
      </div>
    )
  }
}